import React from 'react'
import { Link } from 'react-router-dom'
import DotGray from '../assets/icons/Ellipse11.png'

const FeatureItem = ({ img }) => {
  return (
    <Link to={'/details'} className='w-[267px] cursor-pointer'>
      <img src={img} alt='' className='rounded-[15px] w-full h-[202px]' />
      <div>
        <div className='bg-[#F3EDFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
          Kiến thức
        </div>
        <div className='leading-[24px] text-[18px] font-[600] font-montserrat mt-[15px]'>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
        <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
          <span>Mar 23</span>
          <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
          <span>Binh dep trai</span>
        </div>
      </div>
    </Link>
  )
}

export default FeatureItem
