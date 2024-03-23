import React from 'react'
import Logo from '../Navbar/Logo'
import {SearchBar,NavProfile} from "../"
const Navbar = () => {
  return (
    <div className=' p-2 flex justify-center'>
      <Logo/>
      <SearchBar></SearchBar>
      <NavProfile></NavProfile>
    </div>
  )
}

export default Navbar