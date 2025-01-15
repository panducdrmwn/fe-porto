import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {BsLinkedin} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Work = () => {
  return (
    <>
    <motion.div className='flex flex-col items-center justify-center gap-10'>
        <p className='text-gray-400'>What I Have Done So Far</p>
        <p className='text-gray-400 text-5xl font-bold'>Work Experience</p>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-gray-300"
            date="June 2016 - October 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsLinkedin/>}
        >
            <h3 className="text-black text-3xl font-semibold">Internship Program</h3>
            <h4 className="text-xl text-black">PT. Telkom Indonesia</h4>
            <h4 className="text-black vertical-timeline-element-subtitle">Padang, INA</h4>
            <p className='text-black'>
            User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2022 - January 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsLinkedin />}
        >
            <h3 className="text-3xl font-semibold">Web Developer</h3>
            <h4 className="text-xl ">PT. Green City Traffic</h4>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, INA</h4>
            <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-gray-50"
            date="February 2024 - January 2025"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsLinkedin />}
        >
            <h3 className="text-black text-3xl font-semibold">Frontend Developer</h3>
            <h4 className="text-xl text-black ">PT. Astra Graphia Information Technology</h4>
            <h4 className="text-black vertical-timeline-element-subtitle">Jakarta, INA</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
        </VerticalTimelineElement>
       
      
    </VerticalTimeline>
    </motion.div>
    </>
  )
}

export default Work