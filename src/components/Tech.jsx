import BoxCanvas from "./BoxCanvas"
import { technologies } from "./constants/Constant"
import {motion} from 'framer-motion'

const Tech = () => {
  return (
    <motion.section className="flex flex-col justify-center items-center gap-10 pt-24">
    <motion.div
        className="flex flex-col justify-center items-center gap-10 pt-24"
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
    >
        <p className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl'>What I Have Used So Far</p>
        <p className='text-gray-400 text-5xl font-bold'>Techcnologies</p>
        </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 w-1/2">
        
        {technologies.map((tech)=>(
            <div className="w-28 h-28" key={tech.name}>
                <motion.div 
                    className="items-center"
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: 'easeOut', delay: 0.2}}   
                >
                    <BoxCanvas icon={tech.icon}/>
                </motion.div>
            </div>
        ))}
        
    </div>
    </motion.section>
  )
}

export default Tech