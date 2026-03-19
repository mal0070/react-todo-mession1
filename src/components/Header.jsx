import { useTodos } from '../context/TodoContext'
import { getDateLabel } from '../utils/getDateLabel'

function Header() {
    const { todos } = useTodos()
    return (
        <header className="w-full h-56">
            <p className="text-sm mb-2 text-indigo-800">{getDateLabel()}</p>
            <h1 className="text-6xl text-purple-800 mb-4 font-semibold">
                To-Do <p className="text-stone-800">List</p>
            </h1>
            <p className="text-red-800">
                {' '}
                {todos.filter((todo) => todo.checked).length} / {todos.length} 완료
            </p>
        </header>
    )
}

export default Header
