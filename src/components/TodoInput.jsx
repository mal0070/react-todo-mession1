import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function Header() {
    const { addTodo } = useTodos()
    const [input, setInput] = useState('')

    const handleAdd = () => {
        //input값을 App으로 올려보냄
        addTodo(input)
        setInput('') //저장 후 입력값 초기화
    }

    return (
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
    )
}

export default Header
