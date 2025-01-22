import ProjectCard from "./ProjectCard"
import bg from '../assets/bg.png'
import agit from '../assets/agit.png'

import {motion} from 'framer-motion'
import { PinContainer } from "./3d-pin"
import { projects } from "./constants/Constant"

const Projects = () => {
  return (
    <div id="project" className="flex flex-col items-center justify-center py-20 scroll-smooth">
      <p className='bg-gradient-to-r from-purple-500 to-cyan-500 py-10 bg-clip-text text-transparent text-3xl pt-10'>
        Small selection of recent projects
      </p>
      <h1 className="text-gray-400 text-5xl font-bold ">
        My Projects
      </h1>
      <div className="flex flex-row justify-center rounded-5xl  gap-10 ">
        {projects.map((item) =>(
          <div  key={item?.id} className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title={item?.title}
            href={item?.link}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[4=30rem] ">
              <img className="flex flex-1 w-full rounded-lg my-4 " src={item?.img} alt="Agit UI" />
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               {item?.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  {item?.des}
                </span>
              </div>

              <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
            </div>
          </PinContainer>
        </div>
        ))}
        
      
      </div>
      
    </div>
  )
}

export default Projects