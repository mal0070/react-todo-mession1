import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function Header() {
    const { addTodo } = useTodos()
    const [input, setInput] = useState('')

    const handleAdd = () => {
        addTodo(input)
        setInput('') //저장 후 입력값 초기화
    }

    return (
        <div className="flex gap-2 mr-8 mb-8 px-2 h-10 w-full">
            <input
                className="flex-1 border rounded-md p-2"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                placeholder="새 할 일을 입력하세요"
                autoComplete="off"
            />
            <button
                className={`rounded-md w-10 transition-colors ${input ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
                onClick={handleAdd}
            >
                +
            </button>
        </div>
    )
}

export default Header
