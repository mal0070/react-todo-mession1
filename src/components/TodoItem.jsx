import { useTodos } from '../context/TodoContext'

function TodoItem({ todo }) {
    const { toggleTodo, removeTodo } = useTodos()
    return (
        <li key={todo.id} className="flex items-center justify-between border-b border-gray-200 py-2">
            <label className="flex items-center gap-2">
                <input
                    className="w-5 h-5"
                    type="checkbox"
                    onChange={() => toggleTodo(todo.id)}
                    checked={todo.checked}
                />
                <span className={todo.checked ? 'line-through text-gray-400' : ''}>{todo.text}</span>
            </label>
            <button className="text-red-500 font-bold" onClick={() => removeTodo(todo.id)}>
                X
            </button>
        </li>
    )
}

export default TodoItem
