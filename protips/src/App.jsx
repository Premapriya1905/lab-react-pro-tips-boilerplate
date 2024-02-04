import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import AllRoutes from './AllRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App