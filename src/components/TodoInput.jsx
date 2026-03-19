import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function TodoInput() {
    const { addTodo } = useTodos()
    const [input, setInput] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput('')
    }

    return (
        <form className="flex gap-2 mr-8 mb-8 px-2 h-10 w-full" onSubmit={handleAdd}>
            <input
                className="flex-1 border rounded-md p-2"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="새 할 일을 입력하세요"
                autoComplete="off"
            />
            <button
                type="submit"
                className={`rounded-md w-10 transition-colors ${input ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
            >
                +
            </button>
        </form>
    )
}

export default TodoInput
