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

    const roleBasedLink = () => {
        if (auth?.user?.role === 'Admin') return '/admin';
        else if (auth?.user?.role === 'Author') return '/author';
        else return '/subscriber'
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

        <Menu
            onClick={(e) => setCurrent(e.key)}
            mode="horizontal"
            selectedKeys={[current]}
        >
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link href="/">
                    <a>CMS</a>
                </Link>
            </Menu.Item>
            {auth?.user === null && (<>
                <Menu.Item style={{ marginLeft: 'auto' }} key="signup" icon={<UserAddOutlined />}>
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
                    <SubMenu
                        key="SubMenu"
                        icon={<SettingOutlined />}
                        title={auth?.user?.name || "Dashboard"}
                        style={{ marginLeft: "auto" }}
                    >
                        <Menu.ItemGroup title="Management">
                            <Menu.Item key="setting:1">
                                <Link href={roleBasedLink()}>
                                    <a>Dashboard</a>
                                </Link>
                            </Menu.Item>
                        </Menu.ItemGroup>

                        <Menu.ItemGroup title="Others">
                            <Menu.Item key="setting:2" onClick={signOut}>
                                Sign out
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    {/* <Menu.ItemGroup title="item2">
                    <Menu.Item key="setting:3">3</Menu.Item>
                    <Menu.Item key="setting:4">4</Menu.Item>
                </Menu.ItemGroup> */}
                </>)
            }
            <Menu.Item key="toggle">
                <ToggleTheme />
            </Menu.Item>

        </Menu>
    )
}


export default TopNav;