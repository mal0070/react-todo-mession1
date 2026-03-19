import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <ul className="todo-list" type="none">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
        </ul>
    )
}

export default TodoList
