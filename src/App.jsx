// import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      {/* Add your routes here */}
    </BrowserRouter>
  )
}

export default App
