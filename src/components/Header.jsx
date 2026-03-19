import { useTodos } from '../context/TodoContext'

function Header() {
    const { todos } = useTodos()
    return (
        <header>
            <p>2026년 3월 18일</p>
            <h1>To-Do List</h1>
            <p>
                {' '}
                {todos.filter((todo) => todo.checked).length} / {todos.length} 완료
            </p>
        </header>
    )
}

export default Header
