export function getDateLabel() {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    const now = new Date()
    return `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${days[now.getDay()]})`
}
