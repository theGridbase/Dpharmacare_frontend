import { useCallback, useState } from 'react'
import { Steps } from 'antd'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from '../../../../styles/components/forms/checkout.form.module.scss'
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';


interface ICheckoutForm {
    close: () => void
}


export default function CheckoutForm({ close }: ICheckoutForm) {
    const [data, setData] = useState({})
    const [current, setCurrent] = useState<number>(0);

    const next = useCallback(() => {
        setCurrent(current + 1);
    }, [current]);

    const prev = useCallback(() => {
        setCurrent(current - 1);
    }, [current]);


    const handleSubmit = useCallback((data: any) => {
        setData(data);
    }, []);

    const handleCardSelection = (method: any) => {
        setData({ ...data, method })
    }

    const handleCheckout = (checkoutData: any) => {
        close()
    }

    const steps = [
        {
            title: 'Engage',
            description: 'Customer Info.',
            content: <Step1
                data={data}
                next={next}
                onSuccess={handleSubmit}
            />,
        },
        {
            title: 'Order',
            description: 'Item Details.',
            content: <Step2
            data={data}
            onNext={next}
            />,
        },
        {
            title: 'Pay',
            description: 'Checkout',
            content: <Step3
                data={data}
                onCardSelect={handleCardSelection}
                checkout={handleCheckout}
            />,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title, description : item.description }));




    return (
        <>
            <div className={styles.stepsHolder}>
                <Steps current={current} items={items} />
            </div>
            <div className={styles.stepsContentHolder}>{steps[current].content}</div>
        </>

    )
}