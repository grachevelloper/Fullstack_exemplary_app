import {BulbOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import {QueryErrorResetBoundary} from '@tanstack/react-query';
import {Layout as AntLayout, Button, Menu, theme, Tooltip} from 'antd';
import {MenuItemType} from 'antd/es/menu/interface';
import block from 'bem-cn-lite';
import {ErrorBoundary} from 'react-error-boundary';
import {useTranslation} from 'react-i18next';
import {Outlet, useNavigate} from 'react-router-dom';

import {useLogoutMutation} from '@/users/hooks';

import {useTodoForm} from '../../context';
import {NewTodoForm} from '../NewTodoForm';

import './Layout.scss';

const b = block('layout');

const {Header, Content, Sider} = AntLayout;

export const Layout = () => {
    const {t} = useTranslation('common');
    const {setIsOpen} = useTodoForm();
    const {mutateAsync, isPending, isError} = useLogoutMutation();
    const navigate = useNavigate();
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const leftItems: MenuItemType[] = [
        {
            icon: <BulbOutlined />,
            label: t('layout.left.suggest'),
            key: 'action-0',
            onClick: () => {
                setIsOpen(true);
            },
        },
    ];

    const topItems: MenuItemType[] = [
        {
            icon: <HomeOutlined />,
            label: t('layout.top.main'),
            key: 'nav-0',
            onClick: () => {
                navigate('/todos');
            },
        },
    ];

    const handleLogout = async () => {
        await mutateAsync();
    };
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
                        <NewTodoForm />
                        <Sider breakpoint='lg' collapsedWidth='0' theme='light'>
                            <Menu
                                theme='light'
                                mode='inline'
                                items={leftItems}
                            />
                        </Sider>
                        <AntLayout>
                            <Header className={b('header')}>
                                <Menu
                                    theme='light'
                                    mode='inline'
                                    items={topItems}
                                    defaultSelectedKeys={[]}
                                    rootClassName={b('menu')}
                                />
                                <Tooltip title={t('logout')}>
                                    <LogoutOutlined
                                        onClick={handleLogout}
                                        className={b('logout-icon')}
                                    />
                                </Tooltip>
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
