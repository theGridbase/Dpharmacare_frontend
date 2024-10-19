
import { Form, Input, Button } from 'antd'
import styles from '../../../../styles/components/forms/checkout.form.module.scss'

interface IStep1 {
    data: any;
    next: () => void,
    onSuccess: (data: any) => void;
}

const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <label>
        {label}
    </label>
);



export default function Step1({ data, next, onSuccess }: IStep1) {
    const [form] = Form.useForm()

    const handleFinish = (data: any) => {
        onSuccess(data)
        next()
    }

    return (
        <Form
            className={styles.stepOneForm}
            form={form}
            name="register"
            layout="vertical"
            initialValues={data}
            onFinish={handleFinish}
            autoComplete="off"
            requiredMark={customizeRequiredMark}
            scrollToFirstError
        >
            <Form.Item
                label="Customer Name"
                name='customer'
                rules={[
                    {
                        required: true,
                        message: 'This is a required field',
                    }
                ]}
                hasFeedback
            >
                <Input size='large' placeholder='Enter Customer Name' />
            </Form.Item>
            <Form.Item
                label="Contact Details"
                name='contact'
                rules={[
                    {
                        required: true,
                        message: 'This is a required field',
                    }
                ]}
                hasFeedback
            >
                <Input size='large' placeholder='03XX XXX XXXX' />
            </Form.Item>

            <div className={`d-flex justify-content-end ${styles.submitBtnHolder}`}>
                <Button type='primary' htmlType='submit'>Next & Save</Button>
            </div>
        </Form>
    )
}