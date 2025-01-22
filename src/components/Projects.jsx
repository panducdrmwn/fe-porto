import ProjectCard from "./ProjectCard"
import bg from '../assets/bg.png'
import { FaLocationArrow } from "react-icons/fa"

import {motion} from 'framer-motion'
import { PinContainer } from "./3d-pin"
import { projects } from "./constants/Constant"

const Projects = () => {
  return (
    <div id="project" className="flex flex-col items-center justify-center py-20 scroll-smooth">
      <p className='heading bg-gradient-to-r from-purple-500 to-cyan-500 py-10 bg-clip-text text-transparent text-3xl pt-10'>
        Small selection of recent projects
      </p>
      <span className="text-gray-400 text-5xl font-bold ">
        My Projects
      </span>
      <div className="flex flex-wrap items-center justify-center p-4 rounded-5xl w-full gap-16 ">
        {projects.map((item) =>(
          <div  key={item?.id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[85vw]">
          <PinContainer
            title={item?.title}
            href={item?.link}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[4=30rem] ">
              <img className="flex flex-1 w-full rounded-lg my-4 " src={item?.img} alt="Agit UI" />
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
               {item?.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  {item?.des}
                </span>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center pt-5">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${8 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-sm md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
            </div>
          </PinContainer>
        </div>
        ))
        }
      
      </div>
    </div>
  )
}

export default Projects