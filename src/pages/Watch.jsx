import React,{useContext} from 'react'
import { Error,WatchPage } from '../components'
import { VideoDetails } from '../context'


const Watch = () => {

    const {video} =useContext(VideoDetails)
    console.log(video);


  if (video?.submission) {
    return (
        <>
        <WatchPage/>
        </>
      )
  }
  else{ 
    return (
        <>
        <Error></Error>
        </>
    )
  }
}

export default Watch