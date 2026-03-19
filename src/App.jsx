import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="container">
            <Header />
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default App
