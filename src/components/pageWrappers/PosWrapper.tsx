
import PosHeader from '../pageHeaders/PosHeader'
import ProductCard from '../cards/ProductCard'
import PosCalculator from '../posCalculator/PosCalculator'
import { Button } from 'antd'
import styles from '../../../styles/pages/pos/pos.module.scss'
import anemitiesStyle from '../../../styles/anemities/anemities.module.scss'

export default function PosWrapper() {
    return (
        <>
            <div className="col-lg-8">
                <div className={`${styles.posWrapper} `}>
                    <PosHeader />
                    <div className={styles.categoriesSection}>
                        <Button>Tablets</Button>
                        <Button>Capsules</Button>
                        <Button>Syrups</Button>
                        <Button>Oral Solutions</Button>
                        <Button>Injections</Button>
                        <Button>Others</Button>
                    </div>
                    <div className={`${styles.cardSection} ${anemitiesStyle.overflowScroll}`}>
                        {
                            Array(20).fill('').map((elemeny, index) => (
                                <ProductCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <PosCalculator /> 
            </div>
        </>
    )
}