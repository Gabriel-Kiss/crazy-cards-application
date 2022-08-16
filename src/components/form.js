import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

export default function Form () {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async formData => {
        console.log('%c This is the form data: ', 'background:green;color:white', formData)
        navigate('/results', { replace: true, state: formData })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {/* TITLE */}
            <label className={styles.label}>Title:</label>
            <select
                className={`${styles.input} ${errors.title && styles['input-error']} ${styles.select}`}
                {...register('title', { required: true })}>
                <option value='' disabled selected >Please select a title</option>
                <option value='Mr'>Mr</option>
                <option value='Mrs'>Mrs</option>
                <option value='Miss'>Miss</option>
                <option value='Ms'>Ms</option>
                <option value='Dr'>Dr</option>
            </select>
            {errors.title && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Title is required!</p>}


            {/* FIRST NAME */}
            <label className={styles.label} htmlFor='firstName'>First name:</label>
            <input
                className={`${styles.input} ${errors.firstName && styles['input-error']}`}
                placeholder='First name'
                type='text'
                id='firstName'
                {...register('firstName', { required: true })} />
            {errors.firstName && <p className={styles.error}><span className={styles.warning}>&#9888;</span> First name is required!</p>}


            {/* LAST NAME */}
            <label className={styles.label} htmlFor='lastName'>Last name:</label>
            <input
                className={`${styles.input} ${errors.lastName && styles['input-error']}`}
                placeholder='Last name'
                type='text'
                id='lastName'
                {...register('lastName', { required: true })} />
            {errors.lastName && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Last name is required!</p>}


            {/* DOB */}
            <label className={styles.label} htmlFor='dob'>Date of birth:</label>
            <input
                className={`${styles.input} ${errors.date && styles['input-error']}`}
                type='date'
                id='dob'
                max={new Date().toISOString().split('T')[0]}
                {...register('dob', { required: true })} />
            {errors.dob && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Date of birth is required!</p>}


            {/* EMPLOYMENT */}
            <label className={styles.label}>Employment type:</label>
            <select
                className={`${styles.input} ${errors.employmentType && styles['input-error']}`}
                {...register('employmentType', { required: true })}>
                <option value='' disabled selected>Please select employment type</option>
                <option value='Full Time'>Full time</option>
                <option value='Part Time'>Part time</option>
                <option value='Student'>Student</option>
            </select>
            {errors.employmentType && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Employment type is required!</p>}


            {/* INCOME */}
            <label className={styles.label} htmlFor='annualIncome'>Annual Income:</label>
            <input
                className={`${styles.input} ${errors.annualIncome && styles['input-error']}`}
                placeholder='Annual Income'
                type='number'
                id='annualIncome'
                {...register('annualIncome', { required: true })} />
            {errors.annualIncome && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Annual Income is required!</p>}


            {/* HOUSE NUMBER */}
            <label className={styles.label} htmlFor='houseNumber'>House number:</label>
            <input
                className={`${styles.input} ${errors.houseNumber && styles['input-error']}`}
                placeholder='House number'
                type='number'
                id='houseNumber'
                {...register('houseNumber', { required: true })} />
            {errors.houseNumber && <p className={styles.error}><span className={styles.warning}>&#9888;</span> House number is required!</p>}


            {/* POST CODE */}
            <label className={styles.label} htmlFor='postCode'>Post code:</label>
            <input
                className={`${styles.input} ${errors.postCode && styles['input-error']}`}
                placeholder='Post code'
                type='text'
                id='postCode'
                {...register('postCode', { required: true })} />
            {errors.postCode && <p className={styles.error}><span className={styles.warning}>&#9888;</span> Post code is required!</p>}


            <button type='submit' className={styles.submit}>Submit</button>
        </form>
    )
}