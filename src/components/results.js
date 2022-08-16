import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Results.module.css';
import appStyles from '../App.module.css';
import eligibleCards from '../utils/eligible-cards';
import User from './user';
import Card from './card';

export default function Results () {
    const [cards, setCards] = useState(null);
    const [totalCredit, setTotalCredit] = useState(0);
    const { state } = useLocation();
    const { annualIncome, employmentType, firstName } = state;

    useEffect(() => {
        const getData = async () => {
            return await fetch('/availableCards.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
        }
        getData()
            .then(data => data.json())
            .then(cardsData => {
                const cards = eligibleCards(cardsData.cards, annualIncome, employmentType);
                setCards(cards);
            })
            .catch(error => console.error(error));
    });

    return (
        <>
            {cards
                ? <div className={appStyles['outer-container']}>
                    <div className={appStyles['inner-container']}>
                        <h1 className={`${appStyles.header} ${appStyles.title}`}>Card offers</h1>
                        <User {...state}></User>
                        <div className={styles['text-container']}>
                            <h3 className={`${appStyles.text} ${styles['info-header']}`}>Great news {firstName}, we've got offers for you!</h3>
                            <p className={`${appStyles.text} ${styles['into-text']}`}>Select one or more cards and see how much credit you could get.</p>
                        </div>
                        <div className={styles['cards-container']}>
                            {cards.map(card => <div key={card.name} className={styles}><Card {...card} setTotalCredit={setTotalCredit} /></div>)}
                        </div>
                        <p className={`${appStyles.text} ${styles['total-credit']}`}>Total credit: £{totalCredit}</p>
                    </div>
                </div>
                : <div>Sorry, no card offers available at the moment</div>
            }
        </>
    )
}