import { Button } from 'antd'
import { InventoryIcon } from '@/utils/sidebarIcons'
import styles from '../../../../styles/components/forms/checkout.form.module.scss'

interface IStep2 {
    data: any;
    onNext: () => void
}
export default function Step2({ data, onNext }: IStep2) {

    return (
        <div className={styles.stepTwoForm}>
            <div className={styles.purchaseSection}>
                <h3 className={styles.sectionHead}><InventoryIcon /> PurChase Details</h3>
                <table className={styles.table}>
                    <thead>
                        <th colSpan={5}>Item</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5}>000924812 - <span>Panadol <br /> Packet</span></td>
                            <td>130.00</td>
                            <td>1</td>
                            <td>130.00</td>
                        </tr>
                        <tr>
                            <td colSpan={5}>000924812 - <span>Panadol <br /> Packet</span></td>
                            <td>130.00</td>
                            <td>1</td>
                            <td>130.00</td>
                        </tr>
                        <tr>
                            <td colSpan={5}>000924812 - <span>Panadol <br /> Packet</span></td>
                            <td>130.00</td>
                            <td>1</td>
                            <td>130.00</td>
                        </tr>
                    </tbody>
                    <br />
                    <tfoot>
                        <tr>
                            <td colSpan={7}>Total Amount</td>
                            <td>1,000.00</td>
                        </tr>
                        <tr>
                            <td colSpan={7}>Offered Discount</td>
                            <td>120.00</td>
                        </tr>
                        <tr>
                            <td colSpan={7}>Net Amount</td>
                            <td>880.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
                <div className={`d-flex justify-content-end ${styles.submitBtnHolder}`}>
                    <Button type='primary' onClick={onNext}>Next & Save</Button>
                </div>
        </div>
    )
}