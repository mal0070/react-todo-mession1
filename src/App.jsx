import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import TodoDetail from './pages/TodoDetail'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col min-h-[75vh]">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/todos/:id" element={<TodoDetail />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
