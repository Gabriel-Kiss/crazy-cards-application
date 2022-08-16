import { useState } from 'react';
import styles from './Card.module.css';

export default function Card ({ name, apr, btod, pod, credit, setTotalCredit }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        const isSelected = !selected;
        setSelected(!selected);
        setTotalCredit(previous => isSelected ? previous += credit : previous -= credit)
    }

    return (
        <div className={`${styles['card-container']} ${selected ? styles.selected : ''}`} onClick={handleClick}>
            <h2 className={styles.header}>{name}</h2>
            <p className={styles.text}>Apr: <strong>{apr}%</strong></p>
            <p className={styles.text}>Balance Transfer Offer Duration: <strong>{btod} months</strong></p>
            <p className={styles.text}>Purchase Offer Duration: <strong>{pod} Months</strong></p>
            <p className={styles.text}>Credit Available: <strong>£{credit}</strong></p>
            {selected && <span className={styles['check-mark']}>&#10004;</span>}
        </div>
    )
}