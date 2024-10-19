'use client'
import GoToBtn from '@/components/buttons/navigationBtns/GoToBtn'
import styles from '../../../../styles/notifications/headerNotifications.module.scss'


export default function HeaderNotifications() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.showCount}>
                05
            </div>
            <div className={styles.centerText}>
                <p className={styles.smallText}>Important</p>
                <p className={styles.importantText}>Restock Alerts</p>
            </div>
            <GoToBtn />
        </div>
    )
}