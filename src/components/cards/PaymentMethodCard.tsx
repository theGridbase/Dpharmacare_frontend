import { Radio } from 'antd'
import { TabletIcon } from '@/utils/medicineIcons'
import styles from '../../../styles/components/cards/payment.card.module.scss'

interface IPaymentMethodCard {
    method: any,
    onClick: (method: any) => void,
    isSelected : boolean
}

export default function PaymentMethodCard({ method, onClick,isSelected }: IPaymentMethodCard) {
    return <div className={styles.card} onClick={() => onClick(method)}>
        <div className={`d-flex justify-content-between ${styles.cardHead}`}>
            <TabletIcon /> <Radio checked={isSelected} />
        </div>

        <p className={styles.title}>Pay By</p>
        <p className={styles.method}>{method || null}</p>
    </div>
}