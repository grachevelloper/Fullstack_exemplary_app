import {query} from '@/shared/configs/api';

import {Todo} from '../types';

import {DtoCreateTodo, type DtoUpdateTodo, type TodoApi} from './types';

const Api: TodoApi = {
    listTodos: async () => {
        const listTodos = await query.get<Todo[]>(`/todos`);

        return listTodos;
    },

    getTodoById: async (id: string) => {
        const todoData = await query.get<Todo>(`/todos/${id}`);

        return todoData;
    },
    createTodo: async (createTodoData: DtoCreateTodo) => {
        const response = await query.post<Todo>(`/todos`, createTodoData);
        return response;
    },
    updateTodoById: async ({id, ...updateData}: DtoUpdateTodo) => {
        const response = await query.patch<Todo>(`/todos/${id}`, updateData);
        return response;
    },
};

export default Api;
