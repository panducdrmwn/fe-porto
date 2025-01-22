import { Link } from "react-router-dom";
import logo from '../assets/p-high-resolution-logo.png';
import {motion} from 'framer-motion'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {BiX, BiMenu} from 'react-icons/bi'
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <nav className="top-0 z-10 w-full items-center fixed border-b-gray-400 px-16 py-4 text-white backdrop-blur-md flex md:justify-evenly">
        <motion.section className="w-full flex justify-between items-center mx-auto max-w-7xl">
            <Link
            to="/"
            className="text-white text-xl font-bold hover:text-gray-300"
            >
                <motion.div 
                    animate={{rotate: [0,90,180,360]}}
                    transition={{duration: 5, ease: 'easeInOut'}}    
                >
                <img src={logo} alt="logo" className="w-14 h-11 object-contain"/>
                </motion.div>
            </Link>

            <ul>
                <li className="list-none hidden md:flex flex-row gap-10 mr-10">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}    
                >
                    <Link to="/about" className="text-white hover:text-pink-500  " onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}>About</Link>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.4}}    
                >
                    <Link to="/work" className="text-white hover:text-pink-500" onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}>Work</Link>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}    
                >
                    <Link to="/tech" className="text-white hover:text-pink-500" onClick={() => document.getElementById('tech')?.scrollIntoView({behavior: 'smooth'})}>Tech</Link>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}    
                >
                    <Link to="/project" className="text-white hover:text-pink-500" onClick={() => document.getElementById('project')?.scrollIntoView({behavior: 'smooth'})}>Project</Link>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}    
                >
                    <Link to="/contact" className="text-white hover:text-pink-500" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>Contact</Link>
                </motion.div>
                </li>
            </ul>

            <ul className="hidden md:flex gap-1">
                <li className="list-none hidden md:flex flex-row gap-10 mr-10">
            <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
                    className="hidden md:flex" 
                >
                    <Link to="https://github.com/panducdrmwn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                        <BsGithub/>
                    </Link>
            </motion.div>
            </li>
            <li className="list-none hidden md:flex flex-row gap-10 mr-10">
            <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
                    className="hidden md:flex" 
                >
                    <Link to="https://www.linkedin.com/in/pandu-cakrawala-darmawan/"  target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                        <BsLinkedin/>
                    </Link>
            </motion.div>
            </li>
            </ul>
        </motion.section>

        {isOpen ? (
            <BiX onClick={toggleMenu} className="block md:hidden text-4xl"/>
        ) : (
            <BiMenu onClick={toggleMenu} className="block md:hidden text-4xl"/>
        )}

        {isOpen && (
         
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
                className={`fixed right-0 bg-black/90 top-[84px] flex gap-8 h-screen w-1/2 flex-col items-start justify-start p-12 ${isOpen ? 'block' : 'hidden'}`}
            >
                <ul className="flex flex-col gap-8">
                    <li className="list-none  md:flex flex-row gap-10 mr-10">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}    
                >
                    <Link to="/#about" className="text-white hover:text-gray-300">About</Link>
                </motion.div>
                </li>
                <li className="list-none  md:flex flex-row gap-10 mr-10">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.4}}    
                >
                    <Link to="/" className="text-white hover:text-gray-300">Work</Link>
                </motion.div>
                </li>
                <li className="list-none  md:flex flex-row gap-10 mr-10">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}    
                >
                    <Link to="/" className="text-white hover:text-gray-300">Tech</Link>
                </motion.div>
                </li>
                <li className="list-none  md:flex flex-row gap-10 mr-10">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}    
                >
                    <Link to="/" className="text-white hover:text-gray-300">Contact</Link>
                </motion.div>
                </li>
            </ul>
            
            <ul className="flex md:flex gap-1">
                <li className="list-none  md:flex flex-row gap-10 mr-10">
            <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.6}}   
                    className=" md:flex" 
            >
                    <Link to="/#about" className="text-white hover:text-blue-300">
                        <BsLinkedin/>
                    </Link>
            </motion.div>
            </li>
            <li>
            <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
                    className=" md:flex" 
                >
                    <Link to="/#about" className="text-white hover:text-blue-300">
                        <BsGithub/>
                    </Link>
            </motion.div>
            </li>
            </ul> 
            </motion.div>
            
        )}
    </nav>
  )
}
