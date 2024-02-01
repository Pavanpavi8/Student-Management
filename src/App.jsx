import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Teacher from './Teacher'
import Student from './Student'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
          <Route path='/student' element={<Student/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
