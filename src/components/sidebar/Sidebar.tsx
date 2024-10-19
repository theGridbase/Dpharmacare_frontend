'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import CompanyProfile from './CompanyProfile/CompanyProfile'
import DateTime from './DateTime/DateTime'
import {
    OverAllInsightsIcon,
    InventoryIcon,
    VendorsIcon,
    PosIcon,
    InsightsIcon,
    LogoutIcon
} from '@/utils/sidebarIcons'
import styles from '../../../styles/sidebarRoutes.module.scss'
import { useState } from 'react'

interface INavLinkItem {
    path: any,
    icon: any,
    navgroup: string,
    navname: string
}



export default function Sidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const [navItems, setNavItems] = useState<INavLinkItem[]>(
        [
            { path: '/', icon: <OverAllInsightsIcon />, navgroup: 'Dashboard', navname: 'OverAll Insights' },
            { path: '/inventory', icon: <InventoryIcon />, navgroup: 'Inventory', navname: 'Medicine Stock' },
            { path: '/vendors', icon: <VendorsIcon />, navgroup: 'Vendors', navname: 'Distributors' },
            { path: '/pos', icon: <PosIcon />, navgroup: 'POS', navname: 'Sales Point' },
            { path: '/insights', icon: <InsightsIcon />, navgroup: 'Insights', navname: 'Customers' },
        ]
    )


    const handleLogout = () => signOut()

    return (
        <div className={styles.sidebarSection}>
            <CompanyProfile />
            <DateTime />
            <nav className={styles.navWrapper}>
                {
                    navItems.map((element, index) => (
                        <Link
                            key={index}
                            href={element.path}
                            className={`${styles.navItem} ${pathname === element.path && styles.active} `}
                        >
                            <div className={styles.left}>
                                {element?.icon}
                            </div>
                            <div className={styles.right}>
                                <p className={styles.navGroup}>{element?.navgroup}</p>
                                <p className={styles.navGroupName}>{element.navname}</p>
                            </div>
                        </Link>
                    ))
                }
                <div
                    className={`${styles.navItem} ${styles.stickyBottom}`}
                    onClick={handleLogout}
                >
                    <div className={styles.left}>
                        <LogoutIcon />
                    </div>
                    <div className={styles.right}>
                        <p className={styles.navGroup}>Exit System</p>
                        <p className={styles.navGroupName}>Logiut & Exit</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}