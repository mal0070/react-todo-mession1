function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul className="todo-list" type="none">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
                        {todo.text}
                    </label>
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
