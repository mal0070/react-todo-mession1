import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['공부하기', '운동하기'])
    const [input, setInput] = useState('')

    const addTodo = () => {
        if (!input) {
            alert('할 일을 입력해주세요')
            return
        }
        setTodos([...todos, input])
        setInput('')
    }
    return (
        <div className="container">
            <header>
                <p>2026년 3월 18일</p>
                <h1>To-Do List</h1>
                <p>0 / 0 완료</p>
            </header>
            <div className="input-row">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="새 할 일을 입력하세요"
                    autoComplete="off"
                />
                <button onClick={addTodo}>+</button>
            </div>
            <ul className="task-list">
                {todos.map((todo, index) => (
                    <li key={index}>
                        <label>
                            <input type="checkbox" />
                            {todo}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
