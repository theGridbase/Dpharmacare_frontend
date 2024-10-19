import { Form, Input, Button } from 'antd'
import PaymentMethodCard from '@/components/cards/PaymentMethodCard';
import styles from '../../../../styles/components/forms/checkout.form.module.scss'

interface IStep2 {
    data: any;
    onCardSelect: (method: any) => void
    checkout: (data: any) => void;
}

const methods = ['cash', 'card']
const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <label>
        {label}
    </label>
);


export default function Step3({ data, onCardSelect, checkout }: IStep2) {
    const [form] = Form.useForm()

    const handleFinish = (data: any) => {
        checkout(data)
    }


    return (
        <div className={styles.stepThreeForm}>
            <div className='row mb-5'>
                {
                    methods.map((el, idx) => (
                        <div className='col-lg-6' key={idx}>
                            <PaymentMethodCard onClick={onCardSelect} method={el} isSelected={data?.method === el} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.totalBillSection}>
                <p className={styles.heading}>Total Bill</p>
                <div className={styles.displayerAMount}>
                    <p>250000 <span>Rs</span></p>
                </div>
            </div>
            <Form
                form={form}
                name="register"
                layout="vertical"
                initialValues={data}
                onFinish={handleFinish}
                autoComplete="off"
                requiredMark={customizeRequiredMark}
                scrollToFirstError
            >
                <div className='row'>
                    <div className='col-lg-6'>
                        <Form.Item
                            label="Collected Amount"
                            name='amountCollected'
                            rules={[
                                {
                                    required: true,
                                    message: 'This is a required field',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size='large' placeholder='Enter Amount' />
                        </Form.Item>
                    </div>
                    <div className='col-lg-6'>
                        <Form.Item
                            label="Return Amount"
                            name='amountReturn'
                            rules={[
                                {
                                    required: true,
                                    message: 'This is a required field',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size='large' placeholder='Auto Calculated' />
                        </Form.Item>
                    </div>
                </div>
                <div className={`d-flex justify-content-end ${styles.submitBtnHolder}`}>
                    <Button type='primary' htmlType='submit'>Next & Save</Button>
                </div>
            </Form>
        </div>
    )
}