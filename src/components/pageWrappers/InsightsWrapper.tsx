import InsightsHeader from '../pageHeaders/InsightsHeader'
import AnalyticCard from '../cards/AnalyticCard'
import InventoryTable from '@/components/tables/inventory'
import styles from '../../../styles/pages/inventory/inventory.module.scss'

export default function InsightsWrapper() {
    return (
        <div className={styles.inventoryWrapper}>
            <InsightsHeader />

            <div className={`row ${styles.cardsSection}`}>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='total customers'
                        cardData={{ data: 50000, unit: '' }}
                        isLink={false}
                    />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='Cash payments'
                        cardData={{ data: 2000000, unit: 'PKR' }}
                        isLink={false}
                    />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='card payments'
                        cardData={{ data: 3256565, unit: 'PKR' }}
                        isLink={false}
                    />
                </div>
            </div>

            <div className={`row`}>
                <div className={`col-lg-12`} >
                    <div className={`${styles.tableSection}`}>
                        <InventoryTable

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}