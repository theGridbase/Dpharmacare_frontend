'use client'


import {
    DownloadIcon
} from '@/utils/buttonIcons'
import styles from '../../../../styles/components/buttons/navigationBtns.module.scss'


interface IExportBtn {
    text: String
}

export default function ExportBtn({ text }: IExportBtn) {
    return (
        <button className={styles.exportBtn}>
           <DownloadIcon /> {text}
        </button>
    )
}