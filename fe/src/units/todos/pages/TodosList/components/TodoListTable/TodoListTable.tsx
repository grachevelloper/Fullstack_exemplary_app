import { Table } from "antd"
import { Todo, TodoPriority, TodoState } from "src/units/todos/types/todo"
import { useTranslation } from "react-i18next"
import { ColumnsType } from "antd/es/table"
import { observer } from "mobx-react"

interface TodoListTableProps {
    todos: Todo[]
}

type TodoTableColumns = Pick<Todo, 'title' | 'createdAt' | 'updatedAt' | 'priority' | 'state'>


export const TodoListTable = observer(({ todos }: TodoListTableProps) => {
    const { t } = useTranslation("todo");



    const columns: ColumnsType<TodoTableColumns> = [
        {
            key: 'title',
            title: t("todo.table.col.todo"),
            dataIndex: 'title',
        },
        {
            key: 'priority',
            title: t("todo.table.col.priority"),
            dataIndex: 'priority',
            render: (priority: TodoPriority) => {
                return t(`todo.priority.${priority}`)
            },
            shouldCellUpdate: (record, prevRecord) =>
                record.priority !== prevRecord.priority

        },
        {
            key: 'state',
            title: t("todo.table.col.state"),
            dataIndex: 'state',
            render: (state: TodoState) => {
                return t(`todo.state.${state}`)
            },
        },
        {
            key: 'updatedAt',
            title: t("todo.table.col.updated-at"),
            dataIndex: 'updatedAt',
        },
        {
            key: 'createdAt',
            title: t("todo.table.col.created-at"),
            dataIndex: 'createdAt',

        }
    ];

    return (
        <Table<TodoTableColumns> columns={columns} dataSource={todos} />
    )
})