import Sidebar from '@/components/sidebar/Sidebar'
import styles from '../../../styles/dashboardlaymout.module.scss'

export default function DashboardLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebarWrapper}>
                <Sidebar />
            </div>
            <div className={styles.routesWrapper}>
                {children}
            </div>
        </div>
    )
}