'use client'


import { useCallback, useState } from 'react'
import {
    Select
} from 'antd'
import DrawerLayout from '../drawers/DrawerLayout'
import AddInventory from '../forms/AddInventory'
import CountSelection from './countSelection/CountSelection'
import { DropdDownIcon, FilterIcon } from '@/utils/arrowIcons'
import { AddCircularIcon } from '@/utils/buttonIcons'
import ExportBtn from '../buttons/dataBtns/ExportBtn'
import styles from '../../../styles/components/headers/page.header.module.scss'

interface IDataItem {
    name: string;
    count: number;
}

export default function InventoryHeader() {
    const [countData, setCOuntData] = useState<IDataItem[]>(
        [{ name: 'sales', count: 20 }, { name: 'purchase', count: 20 }, { name: 'vendors', count: 20 }]
    )
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => setOpen(true)
    const handleClose = useCallback(() => setOpen(false), [open])


    return (
        <>
            <div className={styles.insightsHeader}>
                <div className={styles.pageInfo}>
                    <h1 className={styles.pageName}>Inventory</h1>
                    <CountSelection data={countData} />
                </div>
                <div className={styles.actions}>
                    <button className={styles.addBtn} onClick={handleOpen}>
                        <AddCircularIcon />
                        <span>Add new inventory</span>
                    </button>
                    <button className={styles.filterBtn}>
                        <FilterIcon />
                        <Select
                            suffixIcon={<DropdDownIcon />}
                            bordered={false}
                            defaultValue={
                                { value: 'Ascending', label: 'Ascending' }
                            }
                            options={[
                                { value: 'Ascending', label: 'Ascending' },
                                { value: 'Descending', label: 'Descending' }
                            ]}
                        />
                    </button>
                    <ExportBtn text="Export List" />
                </div>
            </div>
            <DrawerLayout
                open={open}
                onClose={handleClose}
            >
                <AddInventory />
            </DrawerLayout>
        </>
    )
}