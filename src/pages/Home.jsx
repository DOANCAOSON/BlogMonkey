import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import Illustration from '../assets/images/Illustration.png'
import Button from '../components/Button'
import BlogItem from '../components/BlogItem'
import Pic1 from '../assets/images/pic1.png'
import Pic2 from '../assets/images/pic2.png'
import Pic3 from '../assets/images/pic3.png'
import Pic4 from '../assets/images/pic4.png'
import Pic5 from '../assets/images/pic5.png'
import Pic6 from '../assets/images/pic6.png'
import Pic7 from '../assets/images/pic7.png'
import Pic8 from '../assets/images/pic8.png'
import DotGray from '../assets/icons/Ellipse11.png'
import FeatureItem from '../components/FeatureItem'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <BaseLayout>
      <section
        style={{ background: 'linear-gradient(155deg, #00B4AA 6.67%, #A4D96C 84.1%)' }}
        className='banner w-full h-[519px] flex items-center justify-between p-[46.88px] mb-[60px]'
      >
        <div className='max-w-[445px]'>
          <h1 className='text-[48px] font-[700] text-white font-montserrat mb-[28px]'>Monkey Blogging</h1>
          <p className='font-md text-[14px] text-white max-w-[421px] leading-7 font-montserrat not-italic mb-[48px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <Button banner={true}>
            <Link to='/create'>Get Started</Link>
          </Button>
        </div>
        <div>
          <img src={Illustration} alt='' className='w-[508.12px] h-[414.71px]' />
        </div>
      </section>
      <section className='feature'>
        <div className='relative mb-[35px]'>
          <div className='absolute w-[36px] h-[3px] bg-[#07eefa] top-[-5px]'></div>
          <h1 className='text-[#3A1097] font-[600] leading-9 text-[28px] font-montserrat '>Feature</h1>
        </div>
        <div className='flex gap-x-[49px]'>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
      </section>
      <section className='mt-[83px]'>
        <div className='relative mb-[35px]'>
          <div className='absolute w-[36px] h-[3px] bg-[#07eefa] top-[-5px]'></div>
          <h1 className='text-[#3A1097] font-[600] leading-9 text-[28px] font-montserrat '>Newest update</h1>
        </div>
        <div className='flex items-start justify-between'>
          <div className='w-[550px] cursor-pointer'>
            <img src={Pic1} alt='' className='rounded-[15px] w-full h-[433px]' />
            <div>
              <div className='bg-[#F3EDFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
                Kiến thức
              </div>
              <div className='leading-[28px] text-[22px] font-[600] font-montserrat mt-[15px]'>
                Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
              </div>
              <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
                <span>Mar 23</span>
                <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
                <span>Binh dep trai</span>
              </div>
            </div>
          </div>
          <div className='w-[550px] h-[562px] bg-[#F3EDFF] rounded-[15px] px-[19px] py-[30px] flex flex-col justify-between'>
            <div className='flex cursor-pointer'>
              <img src={Pic2} alt='' className='w-[181px] h-[130px] mr-[20px]' />
              <div>
                <div className='bg-[#FFFFFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
                  Kiến thức
                </div>
                <div className='leading-[24px] text-[18px] font-[600] font-montserrat mt-[10px]'>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
                  <span>Mar 23</span>
                  <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
                  <span>Binh dep trai</span>
                </div>
              </div>
            </div>
            <div className='w-full h-[2px] bg-[#E0E0E0]'></div>
            <div className='flex cursor-pointer'>
              <img src={Pic3} alt='' className='w-[181px] h-[130px] mr-[20px]' />
              <div>
                <div className='bg-[#FFFFFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
                  Kiến thức
                </div>
                <div className='leading-[24px] text-[18px] font-[600] font-montserrat mt-[10px]'>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
                  <span>Mar 23</span>
                  <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
                  <span>Binh dep trai</span>
                </div>
              </div>
            </div>
            <div className='w-full h-[2px] bg-[#E0E0E0]'></div>
            <div className='flex cursor-pointer'>
              <img src={Pic4} alt='' className='w-[181px] h-[130px] mr-[20px]' />
              <div>
                <div className='bg-[#FFFFFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
                  Kiến thức
                </div>
                <div className='leading-[24px] text-[18px] font-[600] font-montserrat mt-[10px]'>
                  Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </div>
                <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
                  <span>Mar 23</span>
                  <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
                  <span>Binh dep trai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-between mt-[57px]'>
        <FeatureItem img={Pic5}></FeatureItem>
        <FeatureItem img={Pic6}></FeatureItem>
        <FeatureItem img={Pic7}></FeatureItem>
        <FeatureItem img={Pic8}></FeatureItem>
      </section>
    </BaseLayout>
  )
}

export default Home
