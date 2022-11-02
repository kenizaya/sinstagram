import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const GridPost = ({ post }) => {
  const navigate = useNavigate()

  const handleOpenPostModal = () => {
    navigate(`/p/${post.id}`, { state: { modal: true } })
  }

  return (
    <div onClick={handleOpenPostModal} className='relative'>
      <div className='absolute flex justify-center items-center gap-5 w-full h-full hover:bg-black hover:opacity-60 [&>div]:hover:opacity-100 hover:cursor-pointer'>
        <div className='flex gap-2 items-center opacity-0'>
          <BsHeartFill size={22} className='fill-white' />
          <span className='text-white text-xl'>{post.likes}</span>
        </div>
        <div className='flex gap-2 items-center opacity-0 '>
          :
          <FaRegComment
            size={22}
            className='
            fill-white
          '
          />
          <span className='text-white text-xl'>{post.likes}</span>
        </div>
      </div>
      <img src={post.media} alt='post cover' className='w-full' />
    </div>
  )
}

export default GridPost
