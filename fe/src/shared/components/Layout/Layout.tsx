import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {QueryErrorResetBoundary} from '@tanstack/react-query';
import {Layout as AntLayout, Button, Menu, theme} from 'antd';
import block from 'bem-cn-lite';
import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Outlet} from 'react-router-dom';

import './Layout.scss';

const b = block('laout');

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const {Header, Content, Sider} = AntLayout;

export const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <QueryErrorResetBoundary>
            {({reset}) => (
                <ErrorBoundary
                    onReset={reset}
                    fallbackRender={({resetErrorBoundary}) => (
                        <div>
                            There was an error!
                            <Button onClick={() => resetErrorBoundary()}>
                                Try again
                            </Button>
                        </div>
                    )}
                >
                    <AntLayout rootClassName={b()}>
                        <Sider breakpoint='lg' collapsedWidth='0' theme='light'>
                            <Menu
                                theme='light'
                                mode='inline'
                                defaultSelectedKeys={['1']}
                                items={items}
                            />
                        </Sider>
                        <AntLayout>
                            <Header>
                                <Button
                                    type='text'
                                    icon={
                                        collapsed ? (
                                            <MenuUnfoldOutlined />
                                        ) : (
                                            <MenuFoldOutlined />
                                        )
                                    }
                                    onClick={() => setCollapsed(!collapsed)}
                                />
                            </Header>
                            <Content>
                                <Outlet />
                            </Content>
                        </AntLayout>
                    </AntLayout>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};
