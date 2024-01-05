import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
function App() {
  
  return (
    <>
      <Navbar />
      <Banner/>
      <Outlet />
   </>
  )
}

export default App
