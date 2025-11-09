import {useTodosQuery} from '@/todos/hooks';

import {TodoListTable} from './components/TodoListTable';

export const TodosListPage = () => {
    const {data: todos} = useTodosQuery();

    return <TodoListTable todos={todos} />;
};
