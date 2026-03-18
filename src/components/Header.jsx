import { useState } from 'react'

function Header({ todos, addTodo }) {
    const [input, setInput] = useState('')

    const handleAdd = () => {
        //input값을 App으로 올려보냄
        addTodo(input)
        setInput('') //저장 후 입력값 초기화
    }

    return (
        <div>
            <header>
                <p>2026년 3월 18일</p>
                <h1>To-Do List</h1>
                <p> 0 / {todos.length} 완료</p>
            </header>
            <div className="input-row">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="새 할 일을 입력하세요"
                    autoComplete="off"
                />
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default Header
