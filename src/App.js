import styles from './App.module.css';
import Form from './components/form.js'

function App () {

  return (
    <div className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        <h1 className={`${styles.header} ${styles.title}`}>Cards Offers</h1>
        <div className={styles['form-container']}>
          <h2 className={styles.header}>About you</h2>
          <p className={styles.text}>We use this information to identify what credit cards best suit you.</p>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
