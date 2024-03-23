import React from 'react'
import {TbError404} from "react-icons/tb"
import { Link } from 'react-router-dom'

const Filler = () => {
  return (
    <div className='h-fit absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-8 w-full grid place-items-center'>
        <section className='md:text-4xl text-xl flex-wrap text-center p-0 flex gap-4 justify-center items-center'>
           {/* <span className='md:text-6xl text-3xl'><Error 404: Page Not Found/></span> */}
           <span className="md:text-6xl text-3xl">
  Error 404: Page Not Found
</span>

            <span>
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site. 
            </span>
        </section>
        <Link to="/" className='border rounded-lg hover:bg-[#323232] px-5 py-2'>
        Back to our site
        </Link>
    </div>
  )
}

export default Filler