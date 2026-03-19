import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos } = useTodos()
    return (
        <ul className="todo-list" type="none">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList
