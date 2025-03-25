import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import MenuPage from './pages/MenuPage'
import Booking from './pages/Booking'
import ContactUs from './pages/ContactUs'
import Layout from './components/elements/Layout'
import LoginPage from './pages/LoginPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<MenuPage/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
