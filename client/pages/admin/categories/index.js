import { Form, Layout, Row, Col, Input, Button } from "antd"
import AdminLayout from '../../../components/layouts/AdminLayout';
import { EditOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout

function Categories() {
    return (
        <AdminLayout>
            <Row>
                <Col span={12}>
                    <h1>Categories</h1>
                    <p>Add new category</p>
                    <Form>
                        <Form.Item name="name">
                            <Input
                                prefix={<EditOutlined className="site-form-item-icon" />}
                                placeholder="Category name"
                            />
                        </Form.Item>
                        <Button
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