'use client'
import { useState, useCallback } from 'react'
import CalculatorHeader from './CalculatorHeader'
import DrawerLayout from '../drawers/DrawerLayout'
import CheckoutForm from '../forms/checkout/CheckoutForm'
import { Button, Badge, Checkbox, Tag } from 'antd'
import { CartIcon } from '@/utils/buttonIcons'
import styles from '../../../styles/posCalculator/pos.calculator.module.scss'
import anemitiesStyle from '../../../styles/anemities/anemities.module.scss'


export default function PosCalculator() {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => setOpen(true)

    const handleClose = useCallback(() => setOpen(false), [open])


    return (
        <>
            <section className={styles.calculatorWrapper}>
                <div className={styles.mainContainer}>
                    <CalculatorHeader />

                    <ul className={`${styles.calculatorItems} ${anemitiesStyle.overflowScroll}`}>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>
                        <li>
                            <Checkbox />
                            <p className={styles.middle}>
                                Panadol <br />
                                <span>1 Packet</span>
                            </p>
                            <p className={styles.price}>100 <span>Rs</span></p>
                        </li>

                    </ul>
                    <div className={styles.footer}>
                        <Button size='large' className={styles.checkoutBtn} onClick={handleOpen}>
                            <CartIcon /> {"   "} Checkout & Confirm
                            <Badge style={{ color: '#008080' }} color='#fff' size="default" count={5}>
                            </Badge>
                        </Button>
                        <p className={styles.clearAll}>Clear All</p>
                    </div>
                </div>
            </section>
            <DrawerLayout
                open={open}
                onClose={handleClose}
            >
                <CheckoutForm close={handleClose}/>
            </DrawerLayout>
        </>
    )
}