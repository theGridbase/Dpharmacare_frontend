'use client'

import { useEffect, useState } from 'react'
import { Radio, Select, Input, Space, Button } from 'antd'
import { TabletIcon } from '@/utils/medicineIcons'
import { DropdDownIcon } from '@/utils/arrowIcons'
import styles from '../../../styles/components/cards/product.card.module.scss'

export default function ProductCard() {
    const [qty, setQty] = useState<number>(0)

    const handleIncraese = () => setQty(qty + 1)
    const handleDecrease = () => qty !== 0 && setQty(qty - 1)
    const handleInputNum = (e: any) => {
        setQty(parseInt(e.target.value))
    };


    return (
        <section className={styles.cardMain}>
            <div className={styles.cardHeader}>
                <TabletIcon />
                <Radio></Radio>
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.productName}>Panadol</h3>
                <p className={styles.scientificName}>Paracetamol</p>
                <p className={styles.vendorName}>by GetPharma</p>
            </div>
            <div className={styles.availableStock}>
                <h4 className={styles.sectionName}>Available stock</h4>
                <ul className={styles.stockList}>
                    <li><b>8</b> Packets</li>
                    <li><b>10</b> Strips</li>
                    <li><b>80</b> Tablets</li>
                </ul>
            </div>
            <div className={styles.cardCTA}>
                <Select
                    showSearch
                    suffixIcon={<DropdDownIcon />}
                    className={styles.selectType}
                    placeholder="Select a Type"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                    ]}
                />
                <Space>
                    <Button style={{ backgroundColor: '#E06885', color: 'white' }} onClick={handleDecrease}>-</Button>
                    <Input
                        value={qty}
                        min={0}
                        max={100}
                        onChange={handleInputNum}
                        type='number'
                    />
                    <Button style={{ backgroundColor: '#008080', color: 'white' }} onClick={handleIncraese}>+</Button>
                </Space>
            </div>
        </section>
    )
}