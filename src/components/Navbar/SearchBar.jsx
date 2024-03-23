import React,{useContext, useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'
import {useWindowSize} from '../../hooks/'
import { VideoDetails } from '../../context'


const SearchBar = () => {
  let navigate= useNavigate();
  let location = useLocation();
  const {width} = useWindowSize()  
  const {searchText, setSearchText}=useContext(VideoDetails)
  const [toggleSearch, setToggleSearch] = useState("");
  return (
    <>
  { width > 500 &&
    <form className='rounded-3xl flex items-center text-sm ' onSubmit={(e)=>{e.preventDefault(); if(location!="/"){navigate("/")}  }} >
      <input placeholder="Search" id="search-input" autoComplete="off" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className='rounded-l-3xl h-full w-[30vw]    px-4 rounded-r-none border-none mr-[2px] text-white placeholder:white/50 placeholder:italic bg-[#121212] ' name='search'></input>
      
      <button type='submit' className='text-white bg-none rounded-r-3xl bg-[#222222] p-3 px-6  '>
      <span className='bg-inherit text-white'>
      <BsSearch/>
      </span>
      </button>
    </form>
  }

  {
    width <=500 && <div>
      <span className='bg-inherit text-white absolute right-20 mt-2' onClick={()=>{setToggleSearch(!toggleSearch)}}>
      <BsSearch/>
      </span>
      {/* </button> */}
    {toggleSearch &&  <form className=' flex items-center z-30 absolute left-2 rounded-xl border-white border   top-2 bg-[#121212] h-10 w-[95vw] mr-2 text-sm' onSubmit={(e)=>{e.preventDefault();}} >
      <input placeholder="Search" id="search-input" autoComplete="off" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className='rounded-xl h-full w-[90%] px-4  rounded-r-none border-none mr-[2px] text-white placeholder:white/50 placeholder:italic bg-[#121212] ' name='search'></input>
      <span className='bg-inherit text-white' onClick={()=>{setSearchText("");setToggleSearch(!toggleSearch)}}>
      <MdOutlineCancel/>
      </span>
    </form>
    }</div>
  }
  </>
)
}

export default SearchBar