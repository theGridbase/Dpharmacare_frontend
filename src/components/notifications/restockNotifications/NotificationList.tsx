'use client'

import { StausBadge } from '@/components/Badges/StatusBadge'
import {
    TabletIcon
} from '@/utils/medicineIcons'
import styles from '../../../../styles/notifications/notificationList.module.scss'

export default function NotificationList() {
    return (
        <ul className={styles.listWrapper}>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
            <li className={styles.listItem}>
                <div className={styles.icon}>
                    <TabletIcon />
                </div>
                <p className={styles.name}>Panadol <span>10 Pack</span></p>
                <p className={styles.vendor}>Paracetamol by GetPharma</p>
                <div className={styles.badgesWrapper}>
                    <span className={styles.numberStrips}>0 Strips</span>
                    <span className={styles.numberTablets}>0 Tablets</span>
                    <StausBadge status={2} text="Stock end"/>
                </div>
            </li>
          
        </ul>
    )
}