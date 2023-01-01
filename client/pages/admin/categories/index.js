import { Form, Layout, Row, Col, Input, Button } from "antd"
import AdminLayout from '../../../components/layouts/AdminLayout';
import { EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useState } from 'react';

const { Content, Sider } = Layout

function Categories() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            const { data } = await axios.post('/category', values);
            toast.success('Categories created successfully')
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('Category create failed')
            setLoading(false);
        }
    }
    return (
        <AdminLayout>
            <Row>
                <Col span={12}>
                    <h1>Categories</h1>
                    <p>Add new category</p>
                    <Form onFinish={onFinish}>
                        <Form.Item name="name">
                            <Input
                                prefix={<EditOutlined className="site-form-item-icon" />}
                                placeholder="Category name"
                            />
                        </Form.Item>
                        <Button
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                        >Submit
                        </Button>
                    </Form>
                </Col>

                <Col>
                    <p>Another section</p>


                </Col>
            </Row>
        </AdminLayout>
    )
}

export default Categories