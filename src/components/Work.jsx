import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import telkom from '../assets/telkom.png'
import agit from '../assets/agit.png'
import ecgo from '../assets/ecgo.png'

const Work = () => {
  return (
    <>
    <motion.div className='flex flex-col items-center justify-center gap-10'>
        <p className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl'>What I Have Done So Far</p>
        <p className='text-gray-400 text-5xl font-bold'>Work Experience</p>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-gray-300"
            contentStyle={{ background: 'rgb(79, 50, 104)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(79, 50, 104)' }}
            date="June 2016 - October 2016"
            iconStyle={{ background: 'rgb(111, 104, 104)', color: '#fff' }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={telkom}
                    className='w-[60%] h-[60%] object-contain'
                />
             </div>
             }
        >
            <h3 className=" text-3xl font-semibold">Internship Program</h3>
            <h4 className="text-xl ">PT. Telkom Indonesia</h4>
            <h4 className=" vertical-timeline-element-subtitle">Padang, INA</h4>
            <ul className='list-disc mt-5 ml-5 space-y-2'>
                <li> analyzing how the fibre optic system works in West
                Sumatera. 
                </li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="September 2022 - January 2024"
            dateClassName='text-white'
            iconStyle={{ background: 'rgb(123, 115, 109)', color: '#fff' }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={ecgo}
                    className='w-[60%] h-[60%] object-contain'
                />
             </div>
             }
        >
            <h3 className="text-3xl font-semibold">Web Developer</h3>
            <h4 className="text-xl ">PT. Green City Traffic</h4>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, INA</h4>
            <ul className='list-disc mt-5 ml-5 space-y-2'>
                <li>  Responsible for making website / web application mainly using React JS
                </li>
                <li> Fetching data from data from database and generating API using NodeJS.
                </li>
                <li>  UI design using Figma, coding and create reusable objects and wireframes
                for web pages and email templates.
                </li>
                <li>  Identifying and resolve frontend-related issues and bugs.
                </li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-gray-50"
            contentStyle={{ background: 'rgb(79, 50, 104)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(79, 50, 104)' }}
            date="February 2024 - January 2025"
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={agit}
                    className='w-[60%] h-[60%] object-contain'
                />
             </div>
             }
        >
            <h3 className=" text-3xl font-semibold">Frontend Developer</h3>
            <h4 className="text-xl  ">PT. Astra Graphia Information Technology</h4>
            <h4 className=" vertical-timeline-element-subtitle">Jakarta, INA</h4>
            <ul className='list-disc mt-5 ml-5 space-y-2'>
                <li>  Responsible for making website / web application mainly using React JS
                and adding new pages or functions into existing webapps.
                </li>
                <li> Fetching data from data from database.
                </li>
                <li>  UI design using Figma, coding and create reusable objects and wireframes
                for web pages and email templates.
                </li>
                <li>  Identifying and resolve frontend-related issues and bugs.
                </li>
            </ul>
        </VerticalTimelineElement>
       
      
    </VerticalTimeline>
    </motion.div>
    </>
  )
}

export default Work