import {
    Form, Button, Space, Input
} from 'antd'
import { ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { AddCircularIcon } from '@/utils/buttonIcons'
import styles from '../../../styles/components/forms/addvendor.form.module.scss'


const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <div className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
    </div>
);



export default function AddVendorForm() {
    return (
        <Form
            name="dynamic_form_nest_item"
            style={{ maxWidth: 600 }}
            autoComplete="off"
            requiredMark={customizeRequiredMark}
        >

            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key} className={styles.cardFormDynamic}>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'vendorName']}
                                    label="Vendor Name"
                                    rules={[{ required: true, message: 'Missing vendor name' }]}
                                >
                                    <Input placeholder="Vendor name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'distributorName']}
                                    label="Distributer Name"
                                    rules={[{ required: true, message: 'Missing distributer name' }]}
                                >
                                    <Input placeholder="Distributer name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'contact']}
                                    label="Contact Details"
                                    rules={[{ required: true, message: 'Missing contact details' }]}
                                >
                                    <Input placeholder="Contact" />
                                </Form.Item>
                                <CloseCircleOutlined  className={styles.remmoveBtn} onClick={() => remove(name)} />
                            </div>
                        ))}
                        <Form.Item>
                            <Button className={styles.addMoreBtn} onClick={() => add()} icon={<AddCircularIcon />}>
                                Add Another contact person
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item className={styles.submitBtn}>
                <Button type="primary" htmlType="submit">
                    Submit Vendor Details
                </Button>
            </Form.Item>
        </Form>
    )
}