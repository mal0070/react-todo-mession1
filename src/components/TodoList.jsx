import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos } = useTodos()
    return (
        <div className="flex-1 bg-yellow-100 rounded-xl p-4 overflow-auto">
            {todos.length === 0 ? (
                <div className="flex h-full min-h-30 items-center justify-center">
                    <p className="text-center text-gray-500">아직 할 일이 없어요.</p>
                </div>
            ) : (
                <ul className="space-y-2" type="none">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoList
