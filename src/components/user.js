import styles from './User.module.css';

export default function User ({ title, firstName, lastName, dob, employmentType, annualIncome, houseNumber, postCode }) {
    return (
        <div className={styles.container}>
            <div className={styles['top-section']}>
                <img src={require('../assets/images/profile_icon.svg').default} alt='profile icon' height={'70px'} className={styles['profile-icon']}></img>
                <div>
                    <h3 className={`${styles.text} ${styles.header}`}>{title} {firstName} {lastName}</h3>
                    <p className={styles.text}>{dob.split('-').reverse().join('/')}</p>
                </div>
            </div>
            <div className={styles['bottom-section']}>
                <div className={styles['bottom-left']}>
                    <p className={styles.text}>{employmentType}</p>
                    <p className={styles.text}>Annual income: <strong>{annualIncome}</strong></p>
                </div>
                <div className={styles['bottom-right']}>
                    <p className={styles.text}>House number: <strong>{houseNumber}</strong></p>
                    <p className={styles.text}>Postcode: <strong>{postCode}</strong></p>
                </div>
            </div>
        </div>
    )
}