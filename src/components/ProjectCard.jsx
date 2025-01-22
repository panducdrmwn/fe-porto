import React from 'react'

const ProjectCard = ({src, title, desc}) => {
  return (
    <div className=' relative overflow-hidden rounded-xl shadow-lg border  border-[#2A0E61] hover:shadow-lg hover:shadow-pink-800'>
        <img 
            src={src} 
            alt={title}
            width='200'
            height='200'
            className='object-contain '
        />

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard