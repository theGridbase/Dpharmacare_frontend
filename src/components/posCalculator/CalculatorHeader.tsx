import styles from '../../../styles/posCalculator/pos.calculator.header.module.scss'

export default function CalculatorHeader() {
    return (
        <div className={styles.sectionheader}>
            <div className={styles.info}>
                <p className={styles.first}>Customer</p>
                <p className={styles.second}>Bill Amount</p>
            </div>
            <div className={styles.showSum}>
                <p>250000<span>RS</span></p>
            </div>
        </div>
    )
}