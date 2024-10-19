'use client'
import { TailSpin } from 'react-loader-spinner'
import styles from '../../../styles/anemities/anemities.module.scss'

export default function Loading() {
    return <div
        className={styles.loader}
    >
        <TailSpin
            height="100"
            width="120"
            color="#008080"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
}