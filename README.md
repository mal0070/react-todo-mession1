# React Todo 앱 (Mession 1)

간단한 React + Vite + Tailwind 기반 Todo 앱입니다.

## 🚀 프로젝트 소개

이 프로젝트는 `react-router-dom`을 사용한 메인 페이지와 Todo 상세 페이지가 있는 Todo 관리 애플리케이션입니다. 상태는 Context API로 관리하며, Todo 추가, 완료 토글, 삭제, 상세 보기 기능을 제공합니다.

## 📁 주요 구조
```
src/
├── main.jsx                 // 앱 엔트리
├── App.jsx                  // 라우터 / 기본 레이아웃
├── pages/
│   ├── Main.jsx             // Todo 목록 및 입력
│   └── TodoDetail.jsx       // 선택한 Todo 상세
├── context/
│   └── TodoContext.jsx      // Todo 상태 / 함수 공유
├── components/              // UI 컴포넌트 모음
│   ├── Header.jsx
│   ├── TodoInput.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
└── utils/
    └── getDateLabel.js      // 날짜 라벨 포맷팅
```

## ✅ 기능

- 새 Todo 추가
- Todo 완료/미완료 전환
- Todo 삭제
- Todo 클릭 시 상세 페이지 이동
- 오늘 날짜 정보 라벨 표시
- 완료한 Todo개수 / 전체 Todo개수 표시

## 💻 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` (또는 Vite가 제공하는 주소) 열기

## 🧪 빌드 및 미리보기

```bash
npm run build
npm run preview
```

## 🔍 코드 스타일

- React + JSX
- Tailwind CSS
- Context API 상태 공유
- React Router v7
