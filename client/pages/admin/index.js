import { Layout } from "antd"
import AdminLayout from './../../components/layouts/AdminLayout';

const { Content, Sider } = Layout

function Admin() {
    return (
        <AdminLayout>
            <h1>Page props...</h1>
        </AdminLayout>
    )
}

export default Admin