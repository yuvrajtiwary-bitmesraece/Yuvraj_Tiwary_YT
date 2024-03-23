import React from 'react'
import { Avatar,IconButton, Menu, MenuHandler, MenuList, MenuItem,Typography, } from '@material-tailwind/react'
import {IoIosNotifications} from 'react-icons/io'
import {RiVideoAddLine,RiUpload2Line,RiVideoLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
// import avatarSrc from "/pic";

const NavProfile = () => {
  return (
    <div className='flex gap-6 absolute right-5 items-center'>


      <Menu placement="bottom-end">
          <MenuHandler>
        <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <RiVideoAddLine/>
      </IconButton>
          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-8 cursor-pointer  border-none shadow-lg  shadow-[#121212]/10  ">
          <Link to='/filler'>
        <MenuItem className=" flex items-center gap-4 mb-4 text-xl">
        <span className=''><RiUpload2Line/></span>
        <h2 className=' text-start leading-6'>
          New Video
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>

        <MenuItem className=" flex items-center gap-4 text-xl cursor-pointer">
        <span className=''><RiVideoLine/></span>
        <h2 className=' text-start leading-6'>
          Create Video
        </h2>
         
        </MenuItem>
          </Link>

        
        
      </MenuList>
    </Menu>

    
      <Menu placement="bottom-end">
          <MenuHandler>
          <IconButton variant="text" className='text-white text-xl rounded-full p-6 hidden md:inline-block'>
        <IoIosNotifications/>
      </IconButton>
          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-10  border-none shadow-lg  shadow-[#121212]/10  ">

        <div className=" flex items-center gap-8">

        <h2 className='text-lg text-start leading-6'>
         No Notifications 
        </h2>
         
        </div>

        
        
      </MenuList>
    </Menu>
        
      <Menu placement="bottom-end">
          <MenuHandler>
         <Avatar size='sm' src='/ADITYA_SRIVASTAVA_YT/src/pics/Myphoto.png'></Avatar> 

          </MenuHandler>
          <MenuList className="bg-[#323232] text-white px-5 pr-10 border-none shadow-lg  shadow-[#121212]/10  ">
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-8" >
        <Avatar size='sm' src='/ADITYA_SRIVASTAVA_YT/src/pics/Myphoto.png'></Avatar>
        <h2 className='text-lg text-start leading-6'>
        Yuvraj Tiwary <br/><span className='text-sm'>@yuvrajtiwary</span>
        </h2>
        </MenuItem>
            </Link>
        <div className='h-[1px] my-4 w-full bg-white'>

        </div>
        <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Your Channel
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          YouTube Studio
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Switch account
        </h2>
         
        </MenuItem>
          </Link>
         
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Purchases and memberships
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Your data in Youtube
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Appearance: Dark
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Language: English
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Restricted Mode: Off
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Location: India
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Keyboard shortcuts
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Sattings
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2">
        <h2 className='text-lg text-center leading-6'>
          Help
        </h2>
         
        </MenuItem>
          </Link>

        <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2 ">
        <h2 className='text-lg text-center leading-6'>
          Send Feedback 
        </h2>
         
        </MenuItem>
          </Link>
          <Link to='/filler'>
        <MenuItem className=" cursor-pointer flex items-center gap-2 text-red-400">
        <h2 className='text-lg text-center leading-6'>
          Sign out
        </h2>
         
        </MenuItem>
          </Link>
        
        
      </MenuList>
    </Menu>
    </div>
  )
}

export default NavProfile