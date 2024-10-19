
import VendorHeader from '../pageHeaders/VendorHeader'
import AnalyticCard from '../cards/AnalyticCard'
import VendorsTable from '@/components/tables/vendors'
import styles from '../../../styles/pages/inventory/inventory.module.scss'


export default function VendorWrapper() {
    return (
        <div className={styles.inventoryWrapper}>
            <VendorHeader />
            <div className={`row ${styles.cardsSection}`}>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='total stock amounts'
                        cardData={{ data: 50000, unit: 'items' }}
                        isLink={false}
                    />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='vendors outstanding'
                        cardData={{ data: 2000000, unit: 'PKR' }}
                        isLink={false}
                    />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='total clearence'
                        cardData={{ data: 25000, unit: 'PKR' }}
                        isLink={false}
                    />
                </div>
            </div>

            <div className={`row`}>
                <div className={`col-lg-12`} >
                    <div className={`${styles.tableSection}`}>
                        <VendorsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}