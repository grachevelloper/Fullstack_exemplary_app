import {Typography} from 'antd';
import block from 'bem-cn-lite';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

import {TODO_TITLE_MAX_LENGTH} from '@/shared/utils/constants';

import {useTodoMutation, useTodoQuery} from '@/todos/hooks';

const b = block('todo-title');

import './TodoTitile.scss';

export const TodoTitle = () => {
    const {todoId} = useParams();
    const {mutateAsync} = useTodoMutation();
    const {todo} = useTodoQuery(todoId!);

    const [newTitle, setNewTitle] = useState<string>('');

    const handleEnd = (newTitle: string) => {
        mutateAsync({
            id: todoId!,
            title: newTitle,
        });
    };
    return (
        <Typography.Title
            level={1}
            editable={{
                icon: <div />,
                maxLength: TODO_TITLE_MAX_LENGTH,
                triggerType: ['text'],
                enterIcon: null,
                autoSize: true,
                onChange: setNewTitle,
                onEnd: () => handleEnd(newTitle),
            }}
            rootClassName={b('textarea')}
        >
            {todo?.title}
        </Typography.Title>
    );
};
