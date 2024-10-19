import InventoryHeader from '../pageHeaders/InventoryHeader'
import AnalyticCard from '../cards/AnalyticCard'
import InventoryTable from '@/components/tables/inventory'
import styles from '../../../styles/pages/inventory/inventory.module.scss'

export default function InventoryWrapper() {
    return (
        <div className={styles.inventoryWrapper}>
            <InventoryHeader />

            <div className={`row ${styles.cardsSection}`}>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='total products'
                        cardData={{ data: 50000, unit: 'items' }}
                        isLink={false}
                        />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='total sales'
                        cardData={{ data: 2000000, unit: 'PKR' }}
                        isLink={false}
                        />
                </div>
                <div className="col-lg-4">
                    <AnalyticCard
                        cardTitle='critical items'
                        cardData={{ data: 25, unit: 'items' }}
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