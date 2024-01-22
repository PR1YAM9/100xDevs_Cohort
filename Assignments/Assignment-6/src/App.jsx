import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Assignment1 } from './components/UseRefAssignments/Assignment1'
import { Assignment2 } from './components/UseRefAssignments/Assignment2'
// import { Assignment1 } from './components/UseMemoAssignment/Assignment1'
// import { Assignment2 } from './components/UseMemoAssignment/Assignment2'
// import { Assignment3 } from './components/UseMemoAssignment/Assignment3'

// import { Assignment1 } from './components/UseCallbackAssignment/Assignment1'
// import { Assignment2 } from './components/UseCallbackAssignment/Assignment2'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Assignment1/> */}
      {/* <Assignment2/> */}
      {/* <Assignment3/> */}
      {/* <Assignment1/> */}
      {/* <Assignment2/> */}
      {/* <Assignment1/> */}
      <Assignment2/>
    </>
  )
}

export default App
