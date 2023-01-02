import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Checkbox, Button } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth/auth'
import { useRouter } from 'next/router';

function Signin() {
    const [auth, setAuth] = useContext(AuthContext);

    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (auth?.token) {
            router.push('/')
        }
    }, [auth])
    const onFinish = async (values) => {
        // console.log("Success:", values);
        try {
            setLoading(true);
            const { data } = await axios.post(`/signin`, values);
            console.log(data);
            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            } else {
                // save user and token response in context, localstorage then redirect user to dashboard
                setAuth({ user: data.user, token: data.token });
                localStorage.setItem("auth", JSON.stringify(data));
                toast.success("Successfully logged in");
                setLoading(false);
                if (data.user?.role === "Admin") {
                    router.push("/admin");
                } else if (data.user?.role === "Author") {
                    router.push("/author");
                } else {
                    router.push("/subscriber");
                }
            }
        } catch (err) {
            toast.error("SignIn failed. Try again.");
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <Row>
            <Col span={8} offset={8}>
                <h1 style={{ paddingTop: "100px" }}>Signin</h1>

                {/* Name */}
                <Form
                    form={form}
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

                    <Form.Item>
                        <Link href="/forgot-password">
                            <a>Forgot password</a>
                        </Link>
                    </Form.Item>
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