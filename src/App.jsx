import { useState } from 'react'
import './App.css'
import Board from './Board/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <h1 style={{ textAlign: "center" }}>Kanban Board</h1>
            <Board />
        </div>
    </>
  )
}

export default App
