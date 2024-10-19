'use client'


import { useEffect, useState } from 'react'
import { Popover, Badge } from 'antd'
import { DropdDownIcon } from '@/utils/arrowIcons'

interface ICountSelection {
    name: string;
    count: number;
}

interface CountSelectionProps {
    data: ICountSelection[];
}

export default function CountSelection({ data }: CountSelectionProps) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<ICountSelection | null>(null)

    useEffect(() => setSelected(data[0]) ,[])

    return <Popover
        title={null}
        trigger="click"
        open={open}
        content={<ul style={{width : '133px'}}>
            {
                data.map((el,idx) => (
                    <li key={idx} onClick={() => setSelected(el)}>{el.name}</li>
                ))
            }
        </ul>}
        onOpenChange={() => setOpen(prev => !prev)}
    >
        <div
            style={{ minWidth: '130px'}}
            className='d-flex justify-content-between align-items-center'>
            {selected?.name}
            <Badge style={{ color: '#fff' }} color='#008080' size="default" count={selected?.count} />
            <DropdDownIcon />
        </div>
    </Popover>
}