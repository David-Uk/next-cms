import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Checkbox, Button } from 'antd';
import Link from 'next/link';
import axios from 'axios'
import toast from 'react-hot-toast';


function Signup() {
    const onFinish = async (values) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/signup', values);
            // console.log(res)
            if (data?.error) toast.error(data.error)
            else {
                toast.success(`Successfully signed up`)

            }
        } catch (error) {
            toast.error('Sign up failed')

        }
    }

    return (
        <Row>
            <Col span={8} offset={8}>
                <h1 style={{ paddingTop: "100px" }}>Signup</h1>

                {/* Name */}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your name!",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input prefix={<UserOutlined />} placeholder="Name" />
                    </Form.Item>

                    {/* Email Outlined */}
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please enter your email!",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input password" }]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />

                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Sign up
                        </Button>
                        <br />
                        Or <Link href="/signin">
                            <a>Login</a>
                        </Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row >
    )
}

export default Signup