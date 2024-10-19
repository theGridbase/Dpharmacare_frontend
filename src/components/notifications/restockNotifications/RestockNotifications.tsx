
import HeaderNotifications from './HeaderNotifications'
import NotificationList from './NotificationList'
import styles from '../../../../styles/notifications/restockNotifications.module.scss'
import anemitiesStyles from '../../../../styles/anemities/anemities.module.scss'

export default function RestockNotifications() {
    return (
        <div className={styles.restockWrapper}>
            <div className={styles.innerContainer}>
                <HeaderNotifications />
                <div className={`${styles.listSection} ${anemitiesStyles.overflowScroll}`}>
                    <NotificationList />
                </div>
            </div>
        </div>
    )
}