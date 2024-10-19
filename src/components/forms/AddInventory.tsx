import { Form, Input, Button, Select, DatePicker, InputNumber } from 'antd'
import { DropdDownIcon } from '@/utils/arrowIcons'
import { DownloadIcon } from '@/utils/buttonIcons'
import styles from '../../../styles/components/forms/addInventory.form.module.scss'

const { Option } = Select;
const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <label className={styles.label}>
        {label}
    </label>
);


export default function AddInventory() {
    const [form] = Form.useForm()

    const onFinish = () => {

    }

    return <div className={styles.addinventoryFormContainer}>
        <p className={styles.sectionName}>New Inventory</p>
        <h3 className={styles.sectionHeading}>Product Wizard</h3>
        <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={customizeRequiredMark}
            scrollToFirstError
        >
            <div className='row'>
                <div className='col-lg-12'>
                    <Form.Item
                        className={styles.formItem}
                        label="Vendor"
                        name='vendor'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <Select size='large' placeholder="Select Vendor" suffixIcon={<DropdDownIcon />}>
                            <Option value="vendor1">Vendor1</Option>
                            <Option value="vendor2">Vendor2</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='col-lg-6'>
                    <Form.Item
                        label="Domain"
                        name='domain'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <Select size='large' placeholder="Select Domail" suffixIcon={<DropdDownIcon />}>
                            <Option value="domain1">Domain1</Option>
                            <Option value="domain2">Domain2</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='col-lg-6'>
                    <Form.Item
                        label="Category"
                        name='category'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <Select size='large' placeholder="Select Category" suffixIcon={<DropdDownIcon />}>
                            <Option value="category1">Category1</Option>
                            <Option value="category2">Category2</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='col-lg-12'>
                    <Form.Item
                        label="Medicine Name"
                        name='medicine'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <Input size='large' placeholder='Enter Medicine Company Name' />
                    </Form.Item>
                </div>
                <div className='col-lg-12'>
                    <Form.Item
                        label="Salt Name"
                        name='salt'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <Input size='large' placeholder='General Formula Name' />
                    </Form.Item>
                </div>
                <div className='col-lg-6'>
                    <Form.Item
                        label="Manufacture Date"
                        name='manufacture'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <DatePicker style={{ width: '100%' }} placeholder='dd-mm-yy' size='large' />
                        {/* <Input type='date' size='large' placeholder='' /> */}
                    </Form.Item>
                </div>
                <div className='col-lg-6'>
                    <Form.Item
                        label="Expiry Date"
                        name='expires'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <DatePicker style={{ width: '100%' }} placeholder='dd-mm-yy' size='large' />
                    </Form.Item>
                </div>
                <div className='col-lg-4'>
                    <Form.Item
                        label="Packets"
                        name='packets'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <InputNumber style={{ width: '100%' }} size='large' min={1} max={100} defaultValue={10} />
                    </Form.Item>
                </div>
                <div className='col-lg-4'>
                    <Form.Item
                        label="Strips"
                        name='strips'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <InputNumber style={{ width: '100%' }} size='large' min={1} max={100} defaultValue={10} />
                    </Form.Item>
                </div>
                <div className='col-lg-4'>
                    <Form.Item
                        label="Tablets"
                        name='tablets'
                        rules={[
                            {
                                required: true,
                                message: 'This is a required field',
                            }
                        ]}
                        hasFeedback
                    >
                        <InputNumber style={{ width: '100%' }} size='large' min={1} max={100} defaultValue={10} />
                    </Form.Item>
                </div>
            </div>
            <div className={styles.submitBtn}>
                <Button type="primary" htmlType="submit"><DownloadIcon /> Save Data</Button>
                <Button className={styles.clearBillBtn}>Clear Vendor Bill</Button>
            </div>
        </Form>
    </div>
}