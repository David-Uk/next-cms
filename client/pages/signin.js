import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Checkbox, Button } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth/auth'
import { useRouter } from 'next/router';

function Signin() {
    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const { data } = await axios.post('/signin', values);
            setAuth(data);
            localStorage.setItem('token',
                JSON.stringify(data));
            router.push('/admin');
            toast.success('Signed in');
            setLoading(false);

        } catch (error) {
            console.log(error)
            toast.error('Signin failed. Try again')
        }
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
                    onFinish={onFinish}
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