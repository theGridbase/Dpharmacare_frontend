'use client'
import {
    InfoIcon, AnalyticIcon
} from '@/utils/buttonIcons'
import { RightArrowIcon } from '@/utils/arrowIcons'

import styles from '../../../styles/components/cards/analytic.card.module.scss'



interface IAnalyticCard {
    cardTitle: String,
    isLink: Boolean,
    cardData: {
        data: Number,
        unit: String
    }
}

export default function AnalyticCard(props: IAnalyticCard) {
    const { cardData, cardTitle, isLink } = props;


    return (
        <div className={styles.analyticCardWrapper}>
            <div className={styles.infoIcon}>
                <InfoIcon />
            </div>
            <div className={styles.cardTitleSection}>
                <AnalyticIcon />
                <p className={styles.cardTitle}>{cardTitle || 'analytic card'}</p>
                {isLink && <RightArrowIcon />}
            </div>
            <div className={styles.cardData}>
                <p>
                    {`${cardData.data.toString()}.00` || '0.00'}
                    <span className={styles.unit}>{cardData.unit || null}</span>
                </p>
            </div>
        </div>
    )
}