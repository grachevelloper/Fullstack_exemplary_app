import {TodoPriority, Todo, TodoState} from '@/todos/types/todo';

export const createMockTodo = (overrides: Partial<Todo>): Todo => {
    const id = `todo-${Math.floor(Math.random() * 10) + 1}`;
    const userId = `user-${Math.floor(Math.random() * 10) + 1}`;
    return {
        id,
        createdAt: new Date(Date.now()),
        title: overrides.title || 'Самая важная задача',
        content: overrides.content || 'Сделать самое важное дело в жизни',
        authorId: overrides.authorId || userId,
        priority: overrides.priority || TodoPriority.MEDIUM,
        isActive: overrides.isActive || true,
        state: overrides.state || TodoState.IN_WORK,
        ...overrides,
    };
};
