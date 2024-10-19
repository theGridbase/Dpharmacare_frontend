
import {
    Input,
    Button
} from 'antd'
import { AnchorIcon } from '@/utils/arrowIcons'
import { SearchIcon, SearchIconFaded } from '@/utils/buttonIcons'
import styles from '../../../styles/components/headers/page.header.module.scss'

export default function PosHeader() {
    return (
        <div className={styles.insightsHeader}>
            <div className={styles.pageInfo}>
                <h1 className={styles.pageName}>POS</h1>
                <p className={styles.userName}>Muhammd Saad Iqbal <AnchorIcon /> </p>
            </div>
            <div className={styles.actions}>
                <Input size='large' placeholder="Search Medicine" prefix={<SearchIconFaded />} />

                <Button  size='large' style={{ backgroundColor: '#008080', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <SearchIcon />
                </Button>
            </div>
        </div>
    )
}