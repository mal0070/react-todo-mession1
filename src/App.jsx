function App() {
    return (
        <div className="container">
            <header>
                <p>2026년 3월 18일</p>
                <h1>To-Do List</h1>
                <p>0 / 0 완료</p>
            </header>
            <div className="input-row">
                <input type="text" placeholder="새 할 일을 입력하세요" autocomplete="off" />
                <button>+</button>
            </div>
            <ul className="task-list">
                <li>
                    <label>
                        {/* label을 클릭해도 check 할 수 있도록 input과 연결*/}
                        <input type="checkbox" />
                        청소하기
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default App
