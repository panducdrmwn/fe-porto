import {motion} from 'framer-motion'
import { useState, useRef } from 'react'
import PhoneCanvas from './Phone';
import emailjs from '@emailjs/browser'

///template_drlqybm
//service_pk74lhp
//eWhfwi8i55lEAi-vF
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} =  e.target;

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_pk74lhp',
      'template_drlqybm',
    {
      from_name: form.name,
      from_email: form.email,
      to_name: 'Pandu',
      to_email: 'panducdrmwn@gmail.com',
      message: form.message,
    },
    'eWhfwi8i55lEAi-vF'
    )
    .then(()=>{
      setLoading(false)
      alert('Message sent successfully!')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }), (err)=> {
      setLoading(false)
      alert('Failed to send message!')
    }
  }
  return (
    <div id='contact' className='flex flex-col justify-center items-center pt-16 w-full gap-4 scroll-smooth'>
      <p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl'>Get In Touch</p>
      <h3 className='font-extrabold text-5xl text-gray-400'>Contact</h3>
    <div className="xl:mt-12 pb-8 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden w-3/4 ">
        <motion.div 
          className='w-full items-center flex-[0.75] xl:p-8 rounded-xl h-full xl:w-1/2 bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-[1px] bg-opacity-0 '
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col'
          >
            <label className='flex flex-col py-4 '>
              <span className='mb-2 text-white'>Your Name</span>
              <input
                className='py-4 px-6 rounded-lg  bg-transparent border border-white  font-medium'
                type="text"
                name="name"
                placeholder='Whats your name?'
                value={form.name}
                required
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col py-4  '>
              <span className='mb-2 text-white'>Your Email</span>
              <input
                className='py-4 px-6 rounded-lg  bg-transparent border border-white  font-medium'
                type="text"
                name="email"
                placeholder='Whats your email address?'
                value={form.email}
                required
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col py-4 '>
              <span className='mb-2  text-white'>What's Your Thoughts</span>
              <textarea
                rows="7"
                className='py-4 px-6 rounded-lg  bg-transparent border border-white  font-medium'
                type="text"
                name="message"
                placeholder='What do you want to say?'
                value={form.message}
                required
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className='w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg'
              disabled={loading}
            >
              {loading? 'Loading...' : 'Submit'}
            </button>
          </form>
        </motion.div>

        <motion.div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] no-scrollbar xl:w-1/2'>
          <PhoneCanvas className='no-scrollbar'/>
        </motion.div>
    </div>
    </div>
  )
}

export default Contact