'use client'

import { useState } from 'react'
import {
    Table, Tag
} from 'antd'
import PaginationItemRender from '../pagination/PaginationItemRender'
import { PrettyDate } from '@/utils/DateFormatFunctions/DateFunctions'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface';
import {
    ThreeDots
} from '@/utils/arrowIcons'

interface DataType {
    key: Number,
    productId: Number,
    pruductName: String,
    availableStock: { qty: Number, label: String }[],
    status: String,
    expiry: any,
    price: { amount: Number, currency: string }
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Product ID',
        dataIndex: 'productId',
    },
    {
        title: 'Product Name',
        dataIndex: 'pruductName',
    },
    {
        title: 'Available Stock',
        dataIndex: 'availableStock',
        render: (data) => data.map((el: { qty: Number, label: String }, i: number) => (
            <span key={i} style={{ padding: '0px 5px' }}>
                {el.qty.toString() + " " + el.label + "  |"}
            </span>
        ))
    },
    {
        title: 'Stock Status',
        dataIndex: 'status',
        render : (data) => <Tag color='#6CA2FE'>{data}</Tag> 
    },
    {
        title: 'Expiry Date',
        dataIndex: 'expiry',
        render: (data) => `${PrettyDate(data)}`
    },
    {
        title: 'Price',
        dataIndex: 'price',
        render: (data) => <div>{data.amount} <span>{data.currency}</span></div>
    },
    {
        title: 'Action',
        key: 'operation',
        render: () => <div style={{ textAlign: 'center' }}>
            <ThreeDots />
        </div>

    }
];

const data: DataType[] = [
    {
        key: 1,
        productId: 9248120002121,
        pruductName: 'Panadol',
        availableStock: [{ qty: 8, label: 'packets' }, { qty: 8, label: 'tablets' }],
        status: 'medium',
        expiry: new Date(),
        price: { amount: 10000, currency: 'PKR' }
    },
    {
        key: 2,
        productId: 9248120002121,
        pruductName: 'Panadol',
        availableStock: [{ qty: 8, label: 'packets' }, { qty: 8, label: 'tablets' }],
        status: 'medium',
        expiry: new Date(),
        price: { amount: 10000, currency: 'PKR' }
    },
    {
        key: 3,
        productId: 9248120002121,
        pruductName: 'Panadol',
        availableStock: [{ qty: 8, label: 'packets' }, { qty: 8, label: 'tablets' }],
        status: 'medium',
        expiry: new Date(),
        price: { amount: 10000, currency: 'PKR' }
    },

];




export default function OverAllinsightsTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <Table
            size={'middle'}

            pagination={{
                pageSize: 5,
                position: ['bottomLeft'],
                itemRender: PaginationItemRender
            }}
            style={{ height: '100%' }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    )
}