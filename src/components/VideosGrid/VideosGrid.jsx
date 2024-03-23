import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {VideoCard,Loader} from '../shared'
import VideosGridskeleton from "./VideosGrid.skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoDetails } from "../../context";

const VideosGrid = () => {
  const {page, setPage,data, setData,searchText,setVideo}= useContext(VideoDetails)

  useEffect(() => {
    let reqOptions = {
        url: `https://internship-service.onrender.com/videos?page=${page}`,
        method: "GET",
      }
      async function fetchPosts(){
          let response = await axios.request(reqOptions);
          const values=  response.data.data.posts;
          if(page!=1){
            setData(data => [...data,...values]);
          }
          else{
            setData(values);
          }
        }
        fetchPosts();
    },[page]);    

    
    useEffect(() => {
      setVideo("")
    }, )
    

    const searchPass=(item)=>{
      if(item.creator.name?.toLowerCase().includes(searchText.toLowerCase().trim())){return true}
      else if(item.creator.handle?.includes(searchText.toLowerCase().trim())){return true}
      else if(item.submission.title?.toLowerCase().includes(searchText.toLowerCase().trim())){return true}
      else if(item.submission.description?.toLowerCase().includes(searchText.toLowerCase().trim())){return true}
      else {return false}
    }

  if (data?.length > 0) {

      return (
        <InfiniteScroll dataLength={data.length} next={()=>{setPage(page+1)}} hasMore={true} loader={<Loader/>}>
        <div className="grid mx-auto md:mx-10 overflow-hidden grid-cols-1   min-[500px]:grid-cols-2  md:grid-cols-3 xl:grid-cols-5    gap-10">
        {data?.map((item, i) => 
          {if(searchText.length<3){
            return(
              <VideoCard key={i} item={item}></VideoCard>
              )
            }
            else{
              if(searchPass(item)){
                return(
                  <VideoCard key={i} item={item}></VideoCard>
                )
              }
            }
          }
          
          )}
      </div>
      </InfiniteScroll>
    );
  }
  else {
    return <VideosGridskeleton />;
  }
};

export default VideosGrid;
