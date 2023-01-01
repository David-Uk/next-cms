import { Layout } from "antd"
import { AuthContext } from "../../context/auth/auth";
import AdminNav from './../nav/AdminNav';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const { Content } = Layout

function AdminLayout({ children }) {
    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    useEffect(() => {
        if (!auth?.user?.role !== 'Admin') router.push('/');
        else setLoading(false);
    }, [auth])

    if (loading) {
        return <h1>Loading</h1>
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