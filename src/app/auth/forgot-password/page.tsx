'use client'

import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { LeftArrowIcon } from '@/utils/arrowIcons'
import {
    Form,
    Input,
    Button,
    Checkbox
} from 'antd'
import styles from '../../../../styles/pages/auth/auth.page.module.scss'


const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <div className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
    </div>
);

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [form] = Form.useForm();

    const handleSubmit = (data: any) => {
        router.replace('/')
    }



    return (
        <div className={styles.holderWrapper}>
            <h1 className={styles.pageTitle}>Create your New Password</h1>
            <p className={styles.pageDescription}>Start managing your stock, and get real insights about sales</p>

            <Form
                form={form}
                name="register"
                scrollToFirstError
                layout='vertical'
                onFinish={handleSubmit}
                requiredMark={customizeRequiredMark}
            >


                <Form.Item
                    label="Password"
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password size='large' placeholder="Enter password" />
                </Form.Item>
                <Form.Item
                    label="Re-Enter Password"
                    name='reEnterPassword'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password size='large' placeholder="Enter password" />
                </Form.Item>


                <div className={styles.rememberSection}>
                    <Form.Item
                        className={styles.checkboxRenderer}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className={styles.checkkbox}>Remember this device</Checkbox>
                    </Form.Item>
                </div>

                <Button className={`${styles.submitBtn} ${styles.spaceBottom}`} size='large' type="primary" htmlType="submit">
                    Login Now
                </Button>
                <div className={styles.centerAnyThing}>
                    <Link href='/auth' className={styles.anchorLink}>
                        <LeftArrowIcon /> Go back to Login
                    </Link>
                </div>
            </Form>

        </div>
    )
}   