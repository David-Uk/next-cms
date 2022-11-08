import { UserAddOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ToggleTheme from './../ToggleTheme';
import { useState } from 'react';
import Link from 'next/link';

const { SubMenu } = Menu;

const TopNav = () => {
    const handleClick = e => {
        console.log("click ", e);
        setCurrent({ current: e.key });
    }

    const [current, setCurrent] = useState("mail");
    return (

        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link href="/">
                    <a>CMS</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="signup" icon={<UserAddOutlined />}>
                <Link href="/signup">
                    <a>Signup</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="signin" icon={<UserAddOutlined />}>
                <Link href="/signin">
                    <a>Signin</a>
                </Link>
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
            <Menu.Item key="toggle">
                <ToggleTheme />
            </Menu.Item>

        </Menu>
    )
}


export default TopNav;