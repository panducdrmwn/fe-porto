// import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import StarsCanvas from './components/StarsCanvas'
import Work from './components/Work'

function App() {

  return (
    <BrowserRouter>
    <div className=" -z-10 min-h-screen w-full justify-center items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
     
       <Navbar />
       <div className="relative z-0">
          <Hero/>
          <StarsCanvas/>
       </div>
       <Work/>
       <Contact/>
       <Projects/>
       <Tech/>
     
    </div>
    </BrowserRouter>
   
  )
}

export default App
