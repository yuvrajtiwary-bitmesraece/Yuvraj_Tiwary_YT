import React from 'react'
import {TbError404} from "react-icons/tb"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-fit absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-8 w-full grid place-items-center'>
        <section className='md:text-4xl text-xl flex-wrap text-center p-0 flex gap-2 items-center'>
           <span className='md:text-6xl text-3xl'><TbError404/></span>
            <span>
           Error 404 
            </span>
        </section>
        <Link to="/" className='border rounded-lg hover:bg-[#323232] px-5 py-2'>
        Back to our site
        </Link>
    </div>
  )
}

export default Error