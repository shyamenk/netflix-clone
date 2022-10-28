import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import './App.css'

function App() {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route exact path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<LoginScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
