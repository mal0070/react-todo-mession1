import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTodos } from '../context/TodoContext'
import { getDateLabel } from '../utils/getDateLabel'

function TodoDetail() {
    const { todos, updateContent } = useTodos()
    const { id } = useParams() //숫자를 문자열로 반환

    const currentTodo = todos.find((todo) => todo.id === Number(id))
    const [input, setInput] = useState(currentTodo.content)

    const saveContent = () => {
        updateContent(currentTodo.id, input)
    }

    return (
        <div>
            <p className="mb-8 text-sm text-indigo-800">{getDateLabel()}</p>
            <h1 className="text-2xl mb-4">할 일: {currentTodo.text}</h1>
            <textarea
                className="border rounded-md bg-yellow-100 w-full h-50 p-4"
                placeholder="할 일에 대해 메모를 적어보세요."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
                <button className="rounded-md px-4 py-2 bg-black text-white" onClick={saveContent}>
                    저장
                </button>
            </div>
        </div>
    )
}

export default TodoDetail
