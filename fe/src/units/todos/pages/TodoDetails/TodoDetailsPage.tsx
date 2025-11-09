import {Flex} from 'antd';
import {useParams} from 'react-router-dom';

import {useTodoMutation, useTodoQuery} from '@/todos/hooks';

import {TodoTitle} from './components/BaseDetails/components/TodoTitle';

export const TodoDetailsPage = () => {
    const {todoId} = useParams();

    const {mutateAsync} = useTodoMutation();

    const {isPending, isError} = useTodoQuery(todoId!);

    //TODO idk, how fix this eslint happiness
    if (isPending) {
        return <span>IsLoading</span>;
    }
    if (isError) {
        return <span>is error</span>;
    }

    return (
        <Flex vertical align='flex-start' justify='flex-start'>
            <TodoTitle />
        </Flex>
    );
};
