import { PrettyDate } from '@/utils/DateFormatFunctions/DateFunctions'
import { Button, Tag } from 'antd'
import { InventoryIcon } from '@/utils/sidebarIcons'
import {DownloadIcon} from '@/utils/buttonIcons'
import styles from '../../../../../styles/components/purchaseDetails/purchase.details.module.scss';

interface IData {
    key: number,
    saleId: number,
    customerName: string,
    timestamp: any,
    billAmount: number,
    contact: number,
    paymentMethod: string,
    discount: number
}
interface PurchaseDetailsProps {
    data: IData | null;
}

const PurchaseDetails: React.FC<PurchaseDetailsProps> = ({ data }) => {
    if (!data) return <p>No data found</p>
    return (
        <div className={styles.purchaseWrapper}>
            <div className={styles.orderSection}>
                <h3 className={styles.headingOrder}>Order ID</h3>
                <p className={styles.orderNo}>#{data?.saleId}</p>
                <ul className={styles.listDetail}>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Customer Name</p>
                        <p className={styles.bold}>{data.customerName}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Contact</p>
                        <p className={styles.bold}>{data.contact}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Sale Time</p>
                        <p className={styles.bold}>{PrettyDate(data.timestamp)}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Total Bill Amount</p>
                        <p className={styles.bold}>{data.billAmount}</p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Payment Method</p>
                        <p className={styles.bold}>
                            <Tag color="cyan">{data.paymentMethod}</Tag>
                        </p>
                    </li>
                    <li className={styles.listItem}>
                        <p className={styles.faded}>Discount Offer</p>
                        <p className={styles.bold}>
                            <Tag color="lime">{data.discount} %</Tag>
                        </p>
                    </li>
                </ul>
            </div>
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
                </table>
            </div>
            <div className={styles.btnHolder}>
                <Button type='primary' size='large' className={styles.exportBtn}> <DownloadIcon /> Export Data</Button>
                <Button size='large' className={styles.printBtn}>Print Customer Reslip</Button>
            </div>
        </div>
    )
}

export default PurchaseDetails