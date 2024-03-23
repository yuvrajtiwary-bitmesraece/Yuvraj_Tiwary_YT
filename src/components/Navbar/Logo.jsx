import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import { IconButton } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
<Link to='/'>
    <div className='flex gap-1 items-center w-fit  absolute left-5 '>
        
        <span className='text-red-500 text-4xl fill-white '><AiFillYoutube/></span>
        <span className='text-xl font-sans font-bold tracking-tightest text-white'> Yuvraj Tube </span>
    </div>
</Link>
  )
}

export default Logo