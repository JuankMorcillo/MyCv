'use client';
import React, { useState } from 'react'

export default function SideBar() {

  const [basePath, setBasePath] = useState(process.env.NODE_ENV == 'development' ? '' : 'MyCv')

  return (
    <div className='flex flex-col p-4 max-w-90 bg-gray-100 relative lg:rounded-xl xs:rounded-r-xl xs:rounded-l-xl  '>


      <div className='bg-sky-700 w-[100%] h-1/4 absolute top-0 left-0 rounded-tl-xl rounded-tr-xl'
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%, 0 100%)' }}>
      </div>

      <div className='flex flex-col gap-2 mb-8 p-4 relative z-10'>

        <div className='flex flex-col justify-center items-center'>
          <div className='rounded-full overflow-hidden w-55 h-55'>
            <img src={`/${basePath}/image/image.jpg`} className='w-full h-full object-cover' />
          </div>
        </div>

        <div className='flex flex-col text-center'>
          <span className='text-4xl font-semibold uppercase text-[#1C74BB]'>
            Juan Morcillo
          </span>

          <span>
            <span className='text-lg text-gray-500'>Full Stack developer</span>
          </span>
        </div>

      </div>

      <div className='flex flex-col gap-4 mb-8 relative z-10'>

        <span className='text-2xl text-center font-bold w-full uppercase'>
          About me
        </span>
        <div className='flex flex-row justify-between items-center'>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
          <span className='border-1 border-sky-400 border-2 w-[10%]'></span>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
        </div>

        <p className='text-justify'>
          I am a Full Stack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with the latest technologies to build efficient and scalable solutions.
        </p>

      </div>

      <div className='flex flex-col gap-4 mb-8 relative z-10'>

        <span className='text-2xl text-center font-bold text-gray-800 w-full uppercase'>
          Contact
        </span>

        <div className='flex flex-row justify-between items-center'>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
          <span className='border-1 border-sky-400 border-2 w-[10%]'></span>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
        </div>

        <div className='flex flex-col text-center'>
          <span className='text-lg text-gray-600'>
            Email:
          </span>
          <p className='text-gray-500'>
            juankmorcillo@hotmai.com
          </p>

          <span className='text-lg text-gray-600'>
            Phone:
          </span>
          <p className='text-gray-500'>
            +57 324 570 2829
          </p>
        </div>

      </div>

      <div className='flex flex-col gap-4 mb-4 relative z-10'>

        <span className='text-2xl text-center font-bold text-gray-800 w-full uppercase'>
          Reference
        </span>

        <div className='flex flex-row justify-between items-center'>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
          <span className='border-1 border-sky-400 border-2 w-[10%]'></span>
          <span className='border-1 border-gray-400 bg-gray-400 h-[20%] w-[45%]'></span>
        </div>

        <div className='flex flex-col text-center'>
          <span className='text-lg text-gray-600'>
            Email:
          </span>
          <p className='text-gray-500'>
            juankmorcillo@hotmai.com
          </p>

          <span className='text-lg text-gray-600'>
            Phone:
          </span>
          <p className='text-gray-500'>
            +57 324 570 2829
          </p>
        </div>

      </div>

    </div>
  )
}
