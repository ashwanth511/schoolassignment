import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/SignUp'
import Quiz from './Pages/Quiz/Quiz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Signup/>}/>
  <Route path='/dashboard' element={<Quiz/>}/>
  <Route path='/quiz' element={<Quiz/>}/>
</Routes>
    </BrowserRouter>
    </>

  )
}

export default App
