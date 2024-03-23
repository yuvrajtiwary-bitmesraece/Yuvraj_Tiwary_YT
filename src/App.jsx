import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home,Filler,Watch} from "./pages"
import {Error} from './components/'
import {Navbar} from './components/shared'
import { VideoDetails } from './context'

function App() {
  const [video,setVideo]=useState({});
  const [page, setPage] = useState(1);
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("");

  return (
    <VideoDetails.Provider value={{video,setVideo,page,setPage,data,setData,searchText,setSearchText}}>
    <nav className='w-full h-20
     fixed top-0 bg-[#0f0f0f]'>
      <Navbar></Navbar>
    </nav>
      <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
        <Route path='/filler' element={<Filler/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
      </div>
    </VideoDetails.Provider>
  )
}

export default App
