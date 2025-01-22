import ProjectCard from "./ProjectCard"
import telkom from '../assets/telkom.png'
import agit from '../assets/agit.png'
import ecgo from '../assets/ecgo.png'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div id="project" className="flex flex-col items-center justify-center py-20 scroll-smooth">
      <p className='bg-gradient-to-r from-purple-500 to-cyan-500 py-10 bg-clip-text text-transparent text-3xl pt-10'>
        Projects I Have Done So Far
      </p>
      <h1 className="text-gray-400 text-5xl font-bold pb-20">
        My Projects
      </h1>
      <motion.div 
        initial={{opacity: 0, y: 100 }}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: 'easeOut', delay: 0.2}}    
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
     
        <ProjectCard 
          src={agit}
          title={"Test1"}
          desc={"lorem ipsum dolor sit amet, consectetur adip"}
        />
    
      
        <ProjectCard
          src={ecgo}
          title={"Test1"}
          desc={"lorem ipsum dolor sit amet, consectetur adip"}
        />
     
         <ProjectCard
          src={telkom}
          title={"Test1"}
          desc={"lorem ipsum dolor sit amet, consectetur adip"}
        />
      </motion.div>
     
    </div>
  )
}

export default Projects