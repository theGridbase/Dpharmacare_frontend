import {
    NavIcon
} from '@/utils/sidebarIcons'
import styles from '../../../../styles/companyProfile.module.scss'


export default function CompanyProfile(){
    return (
        <div className={styles.comapnyProfileWrapper}>
            <NavIcon />
            <div className={styles.right}>
                <p className={styles.firmName}>Pharmacy</p>
                <p className={styles.tagLine}>Managing Medicine Records</p>
            </div>
        </div>
    )   
}