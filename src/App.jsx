import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: '공부하기', checked: false },
        { id: 2, text: '운동하기', checked: false },
    ])

    const lastId = useRef(3)

    const addTodo = (text) => {
        if (!text) {
            alert('할 일을 입력해주세요')
            return
        }
        setTodos([{ id: lastId.current, text, checked: false }, ...todos])
        lastId.current++
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
            <Header todos={todos} addTodo={addTodo} />
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
