import React, { useState } from 'react'
import Header from './components/Header'
import Main from './views/Main'
import Login from './views/Login'
import { authContext } from './lib/authContext'

import { Route, Routes } from 'react-router-dom'
function App() {
  const [user, setUser] = useState({})
  return (
    <>
      <authContext.Provider value={{ user, setUser }}>
        <Routes>
          <Header />
          <Route path='' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<h1>page no found</h1>} />
        </Routes>
      </authContext.Provider>
    </>
  )
}

export default App
