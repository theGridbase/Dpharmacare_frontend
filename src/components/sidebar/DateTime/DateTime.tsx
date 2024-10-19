import styles from '../../../../styles/dateTime.module.scss'

export default function DateTime(){
    return (
        <div className={styles.datetimeMain}>
            <p className={styles.date}>15 Jun 2023</p>
            <p className={styles.time}>12:05:32 AM</p>
        </div>
    )
}