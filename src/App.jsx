import { useEffect, useRef, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: '공부하기', checked: false },
        { id: 2, text: '운동하기', checked: false },
    ])

    const lastId = useRef(3)

    const [input, setInput] = useState('')

    const addTodo = () => {
        if (!input) {
            alert('할 일을 입력해주세요')
            return
        }
        setTodos([{ id: lastId.current, text: input, checked: false }, ...todos])
        lastId.current++
        setInput('')
    }

    const removeTodo = (selectedId) => {
        setTodos(todos.filter((todo) => todo.id != selectedId))
    }

    const toggleTodo = (selectedId) => {
        const updatedTodo = todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updatedTodo)
    }

    //todos가 바뀔때마다 출력
    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div className="container">
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
                <button onClick={addTodo}>+</button>
            </div>
            <ul className="todo-list" type="none">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
                            {todo.text}
                        </label>
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
