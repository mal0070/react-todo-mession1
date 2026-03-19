import { useParams } from 'react-router-dom'

function TodoDetail() {
    const { id } = useParams()
    return <div>{id}번 할 일</div>
}

export default TodoDetail
