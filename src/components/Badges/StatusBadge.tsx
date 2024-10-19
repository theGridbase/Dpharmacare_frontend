import styles from '../../../styles/components/badges/badges.module.scss'


interface IStatusBadge {
    status : Number // 0 -> info , 1 -> warning , 2 -> danger
    text : String
}

const InfoStyle = {
    backgroundColor: '#F1F8EA',
    color : '#77B52B'
}
const WarningStyle = {
    backgroundColor: '#FFF5E7',
    color : '#EAA12E'
}
const DangerStyle = {
    backgroundColor: '#FCF0F3',
    color : '#E06885'
}




export const StausBadge = ({status , text} : IStatusBadge) => {

    return (
        <span
            className={styles.statusBadge}
            style={status == 1 ? (WarningStyle) : status == 2 ? (DangerStyle) : (InfoStyle)}
        >
            {text || 'Some text'}
        </span>
    )
}