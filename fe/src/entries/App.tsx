import {QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter, Route, RouteProps, Routes} from 'react-router-dom';

import {Layout} from '@/shared/components/Layout';
import {ThemeProvider} from '@/shared/context/theme';
import {queryClient} from '@/shared/lib';

import {todosRoutes} from '@/todos/pages';

const routes = [...todosRoutes];

function AppRouter() {
    if (window.location.pathname === '/') {
        window.location.pathname = '/todos';
    }

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
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
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
export default AppRouter;
