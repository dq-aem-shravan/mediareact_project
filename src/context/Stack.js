import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import ClientAlbum from '../pages/ClientAlbum'
import Contact from '../pages/Contact'
import Invalid from '../pages/Invalid'
import Login from '../pages/Login'
import AdminDashboard from '../pages/AdminDashboard'
import WeddingStoryPage from '../pages/WeddingStoryPage'

const Stack = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientAlbum" element={<ClientAlbum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding/:slug" element={<WeddingStoryPage />} />
        <Route path="*" element={<Invalid />} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}  

export default Stack
