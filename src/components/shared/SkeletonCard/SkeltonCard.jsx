import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './SkeletonCard.styles.css'

const SkeletonCard = ({item}) => {
  return (
    <div className='flex flex-col w-full gap-4 '>
        <Skeleton count={1} height={300} ></Skeleton>
        <Skeleton count={2.5} ></Skeleton>
    </div>
  )
}

export default SkeletonCard