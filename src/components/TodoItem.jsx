import { useTodos } from '../context/TodoContext'

function TodoItem({ todo }) {
    const { toggleTodo, removeTodo } = useTodos()
    return (
        <li key={todo.id}>
            <label>
                <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
                {todo.text}
            </label>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}

export default TodoItem
