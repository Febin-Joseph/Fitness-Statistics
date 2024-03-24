import React from 'react';
import { search, statistics1 } from '../constant'
import DashboardCard from '../components/common/DashboardCard';
import Menu from '../components/common/Menu';

const Fitness = () => {
  return (
    <div className="bg-bgBlue-10 min-h-screen">
      <div className='max-container padding-container'>
        <h1 className='text-white font-bold text-[30px]'>Dashboard</h1>
        <h6 className='text-white text-[15px] pt-1'>Good Morning. Analytic your
          <span className='text-yellow-10'> Game!</span>
        </h6>
      </div>

      <div className='flexEnd justify-end items-center -mt-10 max-container padding-container'>
        <img
          src={search}
          alt="search"
          className='size-[30px]' />
      </div>

      <div className='mt-10 flex justify-between items-center w-full max-container padding-container'>
        <h1 className='text-white font-medium text-[22px]'>Overview</h1>
        <div className='flex gap-8 text-white items-center text-[15px]'>
          <p className='underline text-[#F52C56]'>Week</p>
          <p>Month</p>
          <p>Year</p>
        </div>
      </div>

      <div className='flex gap-5 overflow-scroll no-scrollbar mt-5 pl-3 pr-3'>
        <DashboardCard
          color="text-[#FF8B00]"
          text1="86"
          text2="Your Final Point" />

        <DashboardCard
          color="text-[#6663FA]"
          text1="58"
          text2="Average Point" />

        <DashboardCard
          color="text-[#F52C56]"
          text1="140"
          text2="Highest Point" />
      </div>

      <div className='mt-10 max-container padding-container mb-10'>
        <h1 className='text-white font-medium text-[22px]'>Daily Activity</h1>
        <div className='mt-4'>
          <p className='text-white'>Steps</p>
          <p className='text-white text-[40px] font-bold -mt-2'>7,526</p>
        </div>

        <div className='mt-5 flex gap-24'>
          <div className='flex flex-col'>
            <p className='text-white text-[18px]'>Distance</p>
            <p className='text-white font-bold text-[21px]'>9.4 Km</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-white text-[18px]'>Calories</p>
            <p className='text-white font-bold text-[21px]'>450 Kcal</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-white text-[18px]'>Time</p>
            <p className='text-white font-bold text-[21px]'>1:02 Hrs</p>
          </div>
        </div>
      </div>

      <img
        src={statistics1}
        alt="statistics"
        className='' />

        <div>
          <Menu />
        </div>

    </div>
  )
}

export default Fitness;