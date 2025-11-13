import {QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter, Route, RouteProps, Routes} from 'react-router-dom';

import {AuthLayout} from '@/shared/components/AuthLayout';
import {Layout} from '@/shared/components/Layout';
import {queryClient} from '@/shared/configs/api';
import {ThemeProvider, TodoFormProvider} from '@/shared/context';
import {usersRoutes} from '@/users/pages';

import {todosRoutes} from '@/todos/pages';

const routes: RouteProps[] = [...todosRoutes];

const authRoutes: RouteProps[] = [...usersRoutes.slice(0, 2)];
function AppRouter() {
    if (window.location.pathname === '/') {
        window.location.pathname = '/todos';
    }

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <TodoFormProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout />} path='/'>
                                {routes.map((route: RouteProps) => {
                                    return (
                                        <Route
                                            key={route.path}
                                            element={route.element}
                                            path={route.path}
                                        />
                                    );
                                })}
                            </Route>
                            <Route element={<AuthLayout />} path='/auth'>
                                {authRoutes.map((route: RouteProps) => {
                                    console.log(route.path);
                                    return (
                                        <Route
                                            key={route.path}
                                            element={route.element}
                                            path={route.path}
                                        />
                                    );
                                })}
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </TodoFormProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
export default AppRouter;
