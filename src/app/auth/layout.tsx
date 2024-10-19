
import styles from '../../../styles/layouts/auth/auth.layout.module.scss'

export default function AuthLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <div className={`container ${styles.authLayoutContainer}`}>
            <div className={`row ${styles.rowWrapper}`}>
                <div className="col-lg-6 m-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}