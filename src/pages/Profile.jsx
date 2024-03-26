import React from 'react'
import { heart, usa } from '../constant'
import ProfileCard from '../components/card/ProfileCard'
import Menu from '../components/common/Menu'

const Profile = () => {
  return (
    <div className="bg-bgBlue-10 min-h-screen">
      <div className='max-container padding-container'>
        <h1 className='text-white  text-[15px] '># 12 Running</h1>
        <h6 className='text-white font-bold text-[30px]'>Lurch Schpellchek</h6>
      </div>

      <div className='flexEnd justify-end items-center -mt-10 max-container padding-container'>
        <img
          src={heart}
          alt="heart"
          className='size-[40px]'
        />
      </div>

      <div className='flex gap-4 text-white text-[17px] mt-5 mb-7 max-container padding-container items-center'>
        <img
          src={usa}
          alt="United States Of America"
          className='size-10'
        />
        <p>USA</p>
      </div>

      <div className='flex gap-2 overflow-scroll no-scrollbar mt-5 pl-3 pr-3'>
        <ProfileCard
          text1={'25'}
          text2={'Age'}
        />

        <ProfileCard
          text1={'1.92m'}
          text2={'Height'}
        />

        <ProfileCard
          text1={'1500m'}
          text2={'Record'}
        />
      </div>

      <div className='mt-8 max-container padding-container'>
        <h1 className='text-white font-medium text-[22px]'>About me</h1>
        <p className='text-gray-300 font-medium text-[15px] mt-2 leading-7'>The argument in favor of using filler text goes something like this: If you use real
          content in the design process, anytime you reach a review point you’ll end up reviewing
          and negotiating the content
        </p>

        <div className='mt-7'>
          <h1 className='text-white font-medium text-[22px] mb-3'>Player Stats</h1>

          <div className='flex flex-row justify-between items-center mt-5 mb-5 pl-5 pr-5'>
            <p className='text-white font-medium'>Goal Achieved Record</p>
            <p className='text-yellow-10 font-bold'>145</p>
          </div>
          <span className="w-[95%] h-[1px] bg-gray-700 mt-4 mb-4 block mx-auto"></span>

          <div className='flex flex-row justify-between items-center mt-5 mb-5 pl-5 pr-5'>
            <p className='text-white font-medium'>Max. Speed</p>
            <p className='text-yellow-10 font-bold'>29.8 <span className='text-[14px] font-normal'>Km/h</span></p>
          </div>
          <span className="w-[95%] h-[1px] bg-gray-700 mt-4 mb-4 block mx-auto"></span>

          <div className='flex flex-row justify-between items-center mt-5 mb-5 pl-5 pr-5'>
            <p className='text-white font-medium'>No. of Awards</p>
            <p className='text-yellow-10 font-bold'>84</p>
          </div>
        </div>
      </div>

      <div className='pb-2 flex justify-center mt-10'>
        <Menu />
      </div>
    </div>
  )
}

export default Profile