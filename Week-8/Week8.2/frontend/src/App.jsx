import React from 'react'
import {Routes, Route,} from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import SendMoney from './Pages/SendMoney'
import './index.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/send' element={<SendMoney/>}></Route>
      </Routes>
    </>
  )
}

export default App