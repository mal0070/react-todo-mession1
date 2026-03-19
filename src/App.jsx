import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[75vh]">
                <Header />
                <TodoInput />
                <TodoList />
            </div>
        </div>
    )
}

export default App
