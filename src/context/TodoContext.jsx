/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || '[]'))

    const id = useRef(1)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos), [todos])
    })

    const addTodo = (text) => {
        if (!text) {
            alert('할 일을 입력해주세요')
            return
        }
        setTodos([{ id: id.current, text, checked: false }, ...todos])
        id.current++
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
