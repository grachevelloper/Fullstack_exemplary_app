import {type TodoPriority, type TodoState} from "../../types/todo";

export interface CreateTodoDto {
    authorId: string;
    content: string;
    title: string;
    priority?: TodoPriority;
    state?: TodoState;
}
export type UpdateTodoDto = Partial<CreateTodoDto> & {
    isActive?: boolean;
};
