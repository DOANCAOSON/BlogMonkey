import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import Pic9 from '../assets/images/pic9.png'
import Pic5 from '../assets/images/pic5.png'
import Pic6 from '../assets/images/pic6.png'
import Pic7 from '../assets/images/pic7.png'
import Pic8 from '../assets/images/pic8.png'
import Pic10 from '../assets/images/pic10.png'
import Pic11 from '../assets/images/pic11.png'
import FeatureItem from '../components/FeatureItem'
import DotGray from '../assets/icons/Ellipse11.png'
import Eie from '../assets/icons/Filled.png'
import '../assets/css/details.css'

function Details() {
  return (
    <BaseLayout>
      <div className='details-panner my-8'>
        <div style={{ alignItems: 'center' }} className='w-full cursor-pointer flex justify-evenly '>
          <div>
            <img src={Pic9} alt='' className='w-[648px] h-[466px] rounded-[2%]  ' />
          </div>
          <div className='w-[525px] rounded-[10px] text-[#6B6B6B] ml-[90px]'>
            <div className='bg-[#F3EDFF] w-[91px] h-[26px] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
              Kiến thức
            </div>
            <div className='text-[#23BB86] leading-[48px] text-[36px] font-[600] font-montserrat mt-[15px]'>
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat mt-8'>
              <span>Mar 23</span>
              <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
              <span>Binh dep trai</span>
              <img src={Eie} alt='' className='w-[6px] h-[6px] mx-3 ml-[53%]' />
              <span>1204</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[60%]'>
          <h1 className='text-[22px] font-[600] text-[#232323]font-montserrat mb-4'>Chương 1</h1>
          <p className='text-[22px] font-montserrat'>
            Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter
            will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer
            precision alongside baby leeks. Crafting renders aromatic enjoyment, then slices taco. Minutes undisturbed
            cuisine lunch magnificent mustard curry. Juicy share baking sheet pork. Meals ramen rarities selection, raw
            pastries richness magnificent atmosphere. Sweet soften dinners, cover mustard infused skillet, Skewers on
            culinary experience. Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers
            brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices
            natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften edges frond
            slices onion snack pork steem on wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet
            one-dozen scrape delicious, non sheet raw crunch mustard. Minutes clever slotted tongs scrape, brown steem
            undisturbed rice. Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy
            dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness
            kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk. Flavor centerpiece plate,
            delicious ribs bone-in meat, excess chef end. sweet effortlessly pork, low heat smoker soy sauce flavor
            meat, rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice burgers.
          </p>
          <div>
            <img src={Pic10} className='rounded-[2%] mt-4' alt='' />
          </div>

          <h1 className='text-[22px] font-[600] text-[#232323] font-montserrat my-6'>Chương 2</h1>
          <p className='text-[22px] font-montserrat'>
            Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter
            will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. slices rosette bone-in simmer
            precision alongside baby leeks. Crafting renders aromatic enjoyment, then slices taco. Minutes undisturbed
            cuisine lunch magnificent mustard curry. Juicy share baking sheet pork. Meals ramen rarities selection, raw
            pastries richness magnificent atmosphere. Sweet soften dinners, cover mustard infused skillet, Skewers on
            culinary experience.
          </p>

          <div
            style={{ alignItems: 'center' }}
            className='w-full cursor-pointer flex justify-evenly my-5 bg-[#F8F9FA] rounded-2xl'
          >
            <div>
              <img src={Pic11} alt='' className='w-[237px] h-[237px] rounded-[2%]  ' />
            </div>
            <div className='w-[525px] rounded-[10px] text-[#6B6B6B] ml-[90px]'>
              <div className='text-[#23BB86] leading-[28px] text-[22px] font-[600] font-montserrat mt-[15px]'>
                Jake Sullivan
              </div>
              <p className='text-[#232323] leading-[28px] text-[18px] font-[600] font-montserrat mt-[15px]'>
                Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw
                platter will meld. Thick Skewers skillet natural, smoker soy sauce wait roux. Gastronomy atmosphere set
                aside. Slice butternut cooking home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <div style={{ backgroundColor: '#00D1ED', width: '35px', height: '3px', marginBottom: '10px' }}></div>
        <div>
          <h1 style={{ color: '#23BB86', fontSize: '28px', lineHeight: '36px', fontWeight: '600' }}>
            Bài viết liên quan
          </h1>
        </div>
      </div>
      <section className='flex justify-between mt-[57px]'>
        <FeatureItem img={Pic5}></FeatureItem>
        <FeatureItem img={Pic6}></FeatureItem>
        <FeatureItem img={Pic7}></FeatureItem>
        <FeatureItem img={Pic8}></FeatureItem>
      </section>
    </BaseLayout>
  )
}

export default Details
