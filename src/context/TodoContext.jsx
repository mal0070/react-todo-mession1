/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, useState } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
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

    return <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>{children}</TodoContext.Provider>
}

export function useTodos() {
    return useContext(TodoContext)
}
