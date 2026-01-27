// import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import StarsCanvas from './components/StarsCanvas'
import Work from './components/Work'
import Scene from './components/Scene'

function App() {

  return (
    <BrowserRouter basename='/fe-porto'>
    <div className=" -z-10 min-h-screen w-full flex flex-col justify-center items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] no-scrollbar overflow-y-hidden">
     
       <Navbar />
       <div className="relative w-full z-0">
          <Hero/>
            <StarsCanvas/>
       </div>

       <Work/>

       <Tech/>
       <Projects/>
       <div className="relative z-0 w-full flex justify-center">
          <Contact/>
          {/* <StarsCanvas/> */}
       </div>
       
      
       
     
    </div>
    </BrowserRouter>
   
  )
}

export default App
