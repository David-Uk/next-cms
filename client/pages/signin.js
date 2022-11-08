import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Checkbox, Button } from 'antd';
import Link from 'next/link';

function Signin() {
    const onFinish = values => {

    }

    return (
        <Row>
            <Col span={8} offset={8}>
                <h1 style={{ paddingTop: "100px" }}>Signin</h1>

                {/* Name */}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                // onFinish={onFinish}
                >
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

                    <Link href="/signup">
                        <a>Forgot password?</a>
                    </Link>
                    <br /><br />

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Login
                        </Button>

                        <br />
                        Or <Link href="/signup">
                            <a>Sign up</a>
                        </Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row >
    )
}

export default Signin