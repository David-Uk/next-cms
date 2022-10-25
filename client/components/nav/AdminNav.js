import { Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ContainerOutlined,
    MailOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from 'react';

const { Sider } = Layout

const { SubMenu } = Menu;

const AdminNav = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState("");

    return (
        <div style={{ width: 256 }}>
            <Button
                type="primary"
                onClick={() => setCollapsed(!collapsed)}
                style={{ marginBottom: 16 }}
            >
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined

                )}
            </Button>
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<ContainerOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<ContainerOutlined />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    Option 3
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key={"5"}>Option 5</Menu.Item>
                    <Menu.Item key={"6"}>Option 6</Menu.Item>
                    <Menu.Item key={"7"}>Option 7</Menu.Item>
                    <Menu.Item key={"8"}>Option 8</Menu.Item>

                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                    <Menu.Item key={"9"}>Option 9</Menu.Item>
                    <Menu.Item key={"10"}>Option 6</Menu.Item>
                    <Menu.Item key={"11"}>Option 7</Menu.Item>
                    <Menu.Item key={"12"}>Option 8</Menu.Item>

                </SubMenu>
                <Menu.Item></Menu.Item>

            </Menu>
        </div>
    )
}

export default AdminNav