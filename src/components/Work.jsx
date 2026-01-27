import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import telkom from '../assets/telkom.png'
import agit from '../assets/agit.png'
import ecgo from '../assets/ecgo.png'
import bg from '../assets/bg.png'
import ccm from '../assets/ccm.jpg'

const Work = () => {
  return (
    <>
    <motion.div id='work' className='flex flex-col items-center justify-center gap-10 scroll-smooth'>
        <p className='text-2xl text-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent xl:text-3xl'>What I Have Done So Far</p>
        <p className='text-center text-gray-400 text-5xl font-bold'>Work Experience</p>
    <VerticalTimeline>
        <VerticalTimelineElement
            id='vertical-timeline-element--work'
            contentStyle={{background:'transparent', backgroundImage: `url(${bg})` , borderRadius: '16px', boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter:' blur(19px)',  border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(79, 50, 104)' }}
            date="June 2016 - October 2016"
            iconStyle={{ background: 'rgb(111, 104, 104)'}}
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
                <li> Analyzing how the fiber optic system works in West
                Sumatera. 
                </li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background:'transparent', backgroundImage: `url(${bg})`,  backgroundSize: 'cover', borderRadius: '16px', boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter:' blur(29px)',  border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white'}}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="February 2022 - January 2024"
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
            contentStyle={{ background:'transparent', backgroundImage: `url(${bg})`,  backgroundSize: 'cover', borderRadius: '16px', boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter:' blur(29px)',  border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white'}}
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
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-gray-50"
            contentStyle={{ background:'transparent', backgroundImage: `url(${bg})`,  backgroundSize: 'cover', borderRadius: '16px', boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter:' blur(29px)',  border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(79, 50, 104)' }}
            date="January 2026 - Present"
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                    src={ccm}
                    className='w-[60%] h-[60%] object-contain'
                />
             </div>
             }
        >
            <h3 className=" text-3xl font-semibold">Frontend Developer</h3>
            <h4 className="text-xl  ">College of Contract Management United Kingdom</h4>
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