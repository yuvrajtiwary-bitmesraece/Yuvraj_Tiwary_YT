import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineLike, AiOutlineComment,AiOutlineLink,AiOutlineArrowLeft, AiOutlineShareAlt, AiOutlineAccountBook, AiOutlineHeart} from 'react-icons/ai'
import { VideoDetails } from '../../context/';
import { Chip } from '@material-tailwind/react';
import {useWindowSize} from "../../hooks/"
import {VideoPlayer} from '../';

const WatchPage = () => {
  const { video } = React.useContext(VideoDetails);

  const { width } = useWindowSize();
  return (
    <>

    {/* Mobile View */}

      {width < 720 && (
        <div className="flex w-fit m-auto gap-4 flex-col sm:items-start  items-center ">
          <VideoPlayer
            width={"80vw"}
            height={"70vh"}
            url={video?.submission?.mediaUrl}
          />
          <section className="text-start  sm:w-[80vw] max-w-[95vw] overflow-hidden m-auto flex flex-col gap-4">
            <h2 className="font-bold text-2xl"> {video.submission.title}</h2>
            <div className="flex w-full min-[450]:justify-start justify-center">
              <Chip
                variant="outlined"
                className="bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl w-full mx-3 max-w-[30vw] text-center text-lg cursor-pointer text-white"
                value={video.reaction.count + ""}
                icon={<AiOutlineLike />}
              />
              <Chip
                variant="outlined"
                className="bg-[#222222] border-[#121212] hover:bg-[#323232] duration-100 text-lg ease-in rounded-3xl mx-3 w-full max-w-[30vw] text-center text-white cursor-pointer"
                value={video.comment.count}
                icon={<AiOutlineComment />}
              />
            </div>
            <div className=" flex gap-4 items-center">
              <img
                src={video.creator.pic}
                alt={video.creator.name + " Logo"}
                className="w-12 aspect-square rounded-full"
              />
              <div>
                <h2 className="font-semibold text-xl leading-6 w-[35vw] min-[400]:w-[45vw] text-ellipsis overflow-hidden">
                  {video.creator.name}
                </h2>
                <p className="text-sm font">{video.creator.handle}</p>
              </div>
              <button className="bg-transparent border-2 rounded-xl px-4">
                {" "}
                Follow Us{" "}
              </button>
            </div>
            <p>{video.submission.description}</p>
            <a
              href={video.submission.hyperlink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#121212] border-2 rounded-xl px-4 w-fit py-2 hover:bg-[#222222] m-auto duration-150 ease-in"
            >
              Go to GroCare{" "}
              <span>
                <AiOutlineLink></AiOutlineLink>{" "}
              </span>
            </a>
          </section>
        </div>
      )}

      {/* //Desktop View */}

      {width > 720 && (
        <div className="hidden w-fit m-auto gap-4 md:flex  ">
          <VideoPlayer
            width={"45vh"}
            height={"90vh"}
            url={video?.submission?.mediaUrl}
          />
          <section className="text-start w-[35vw]  overflow-hidden m-auto flex flex-col justify-start gap-4 pl-4">
            <h2 className="font-bold text-2xl"> {video.submission.title}</h2>

            <div className=" flex gap-4 items-center md:flex-wrap xl:flex-nowrap">
              <img
                src={video.creator.pic}
                alt={video.creator.name + " Logo"}
                className="w-12 aspect-square rounded-full"
              />
              <div>
                <h2 className="font-semibold text-xl leading-6 md:w-fit w-[35vw] min-[400]:w-[45vw] text-ellipsis overflow-hidden">
                  {video.creator.name}
                </h2>
                <p className="text-sm font">{video.creator.handle}</p>
              </div>
              <button className="bg-[#121212] border-2 rounded-xl px-4 hover:bg-[#222222] duration-150 ease-in py-1">
                {" "}
                Follow Me{" "}
              </button>
            </div>

            <div className="flex gap-4">
              <Chip
                variant="outlined"
                className="bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl px-8 text-lg cursor-pointer text-white"
                value={video.reaction.count + ""}
                icon={<AiOutlineLike />}
              />
               <Chip
                variant="outlined"
                className="bg-[#222222] border-[#121212] hover:bg-[#323232] duration-100 text-lg ease-in rounded-3xl px-8 text-white cursor-pointer"
                value={video.comment.count}
                icon={<AiOutlineHeart />}
              />
              <Chip
                variant="outlined"
                className="bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl px-8 text-lg cursor-pointer text-white"
                value={video.reaction.count + ""}
                icon={<AiOutlineShareAlt />}
              />
              <Chip
                variant="outlined"
                className="bg-[#222222] hover:bg-[#323232] border-[#121212] duration-100 ease-in rounded-3xl px-8 text-lg cursor-pointer text-white"
                value={video.reaction.count + ""}
                icon={<AiOutlineComment />}
              />
             
            </div>
            <p>{video.submission.description}</p>

            <div className='flex justify-between'>
            <Link
              to={'/'}
              className="bg-[#121212] border-2 rounded-xl px-4 w-fit py-2 hover:bg-[#222222] duration-150 ease-in self-start "
            >
             <span>
                <AiOutlineArrowLeft/></span> Home
            </Link>
          
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default WatchPage;
