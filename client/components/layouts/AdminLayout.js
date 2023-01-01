import { Layout } from "antd"
import { AuthContext } from "../../context/auth/auth";
import AdminNav from './../nav/AdminNav';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout

function AdminLayout({ children }) {
    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    useEffect(() => {
        // if (!auth?.user?.role !== 'Admin') router.push('/');
        // else setLoading(false);
        getCurrentAdmin()
    }, [auth?.token])

    const getCurrentAdmin = async () => {
        try {
            const { data } = await axios.get('/current-admin');
            setLoading(false);
            console.log(data)
        }
        catch (err) {
            console.log(err)
            router.push('/')
        }

    }

    if (loading) {
        return <LoadingOutlined style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '50px',
            color: 'red'
        }} />
    }
    return (
        <Layout>
            <AdminNav></AdminNav>
            <Layout>
                <Content>
                    {children}
                </Content>
            </Layout>

        </Layout>
    )
}

export default AdminLayout