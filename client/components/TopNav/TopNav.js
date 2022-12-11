import { UserAddOutlined, MailOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ToggleTheme from './../ToggleTheme';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { AuthContext } from '../../context/auth/auth';

const { SubMenu } = Menu;

const TopNav = () => {
    const [auth, setAuth] = useContext(AuthContext);
    const [current, setCurrent] = useState("mail");

    const router = useRouter();
    const handleClick = e => {
        console.log("click ", e);
        setCurrent(e.key);
    }

    const signOut = () => {
        localStorage.removeItem("auth");
        setAuth({
            user: null,
            token: ''
        });
        router.push('/signin');
    }

    return (

        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link href="/">
                    <a>CMS</a>
                </Link>
            </Menu.Item>
            {auth?.user === null && (<>
                <Menu.Item style={{marginLeft:'auto'}} key="signup" icon={<UserAddOutlined />}>
                    <Link href="/signup">
                        <a>Signup</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="signin" icon={<UserAddOutlined />}>
                    <Link href="/signin">
                        <a>Signin</a>
                    </Link>
                </Menu.Item>
            </>)}
            

            {auth?.user !== null && (
                <>
                    <Menu.Item onClick={() => signOut()} key="signin" icon={<LogoutOutlined />}>
                        <a>Sign out</a>
                    </Menu.Item>
                    <SubMenu style={{ marginLeft: "auto" }} key="SubMenu" icon={<SettingOutlined />} title="Dashboard">
                        <Menu.ItemGroup title="Management">
                            <Menu.Item key="setting:1">Management</Menu.Item>
                            <Menu.Item key="setting:2">
                                <Link href='/admin'><a>Admin</a></Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        {/* <Menu.ItemGroup title="item2">
                    <Menu.Item key="setting:3">3</Menu.Item>
                    <Menu.Item key="setting:4">4</Menu.Item>
                </Menu.ItemGroup> */}
                    </SubMenu>
                </>)
            }
            <Menu.Item key="toggle">
                <ToggleTheme />
            </Menu.Item>

        </Menu>
    )
}


export default TopNav;