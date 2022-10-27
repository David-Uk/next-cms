import { Menu, Button, Layout } from "antd";
import {
    PushpinOutlined,
    CameraOutlined,
    UserSwitchOutlined,
    SettingOutlined,
    BgColorsOutlined,
    UserOutlined,
    CommentOutlined
} from "@ant-design/icons";
import React, { useState } from 'react';
import Link from 'next/link';

const { Sider } = Layout

const { SubMenu } = Menu;

const AdminNav = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState("");

    return (
        <Sider collapsible>

            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["2", "6", "10"]}
                mode="inline"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="1" icon={<SettingOutlined />}>
                    <Link href="/admin">
                        <a>Dashboard</a>
                    </Link>
                </Menu.Item>
                {/* Posts */}
                <SubMenu key="2" icon={<PushpinOutlined />} title="Posts">
                    <Menu.Item key="3">
                        <Link href="/admin/posts">
                            <a>All Posts</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href="/admin/posts/new">
                            <a>Add Posts</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href="/admin/categories">
                            <a>Categories</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                {/* Media */}
                <SubMenu key="6" icon={<CameraOutlined />} title="Media">
                    <Menu.Item key="7">
                        <Link href="/admin/media/library">
                            <a>Library</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link href="/admin/media/new">
                            <a>Add New</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                {/* Comments */}
                <Menu.Item key="9" icon={<CommentOutlined />}>
                    <Link href="/admin/comments">
                        <a>Comments</a>
                    </Link>
                </Menu.Item>

                {/* Users */}
                <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
                    <Menu.Item key="11">
                        <Link href="/admin/users">
                            <a>All Users</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <Link href="/admin/users/new">
                            <a>Add New</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                {/* Profile */}
                <Menu.Item key={"5"} icon={<UserOutlined />}>
                    <Link href="/admin/userid">
                        <a>Profile</a>
                    </Link>
                </Menu.Item>

                {/* Customize */}
                <Menu.Item key={"5"} icon={<BgColorsOutlined />}>
                    <Link href="/admin/customize">
                        <a>Customize</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default AdminNav