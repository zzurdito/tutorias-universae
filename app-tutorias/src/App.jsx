import Layout from './components/Layout'
import Login from './components/Login'
import Register from './components/Register'
import {Routes , Route } from 'react-router-dom'
import './App.css'
import './output.css'
import Calendar_Page from './components/Calendar_Page'

function App() {


  return (
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path="login" element={<Login/>} />
            <Route path="calendar" element={<Calendar_Page/>} />
            <Route path="register" element={<Register/>} />
          </Route>
        </Routes>
  )
}

export default App
