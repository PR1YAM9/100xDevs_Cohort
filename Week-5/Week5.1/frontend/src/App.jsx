import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleCount() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleCount}>counter: {count}</button>
    </>
  )
}

export default App
