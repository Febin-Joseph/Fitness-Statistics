import React from 'react'
import { search, statistics3 } from '../constant'
import AnalyticsCard from '../components/card/AnalyticsCard'
import Menu from '../components/common/Menu'

const Analytics = () => {
  return (
    <div className="bg-bgBlue-10 min-h-screen pt-5 overflow-hidden">
      <div className='max-container padding-container'>
        <h1 className='text-white  text-[15px] '>Reports</h1>
        <h6 className='text-white font-bold text-[30px]'>Analytics Reports</h6>
      </div>

      <div className='flexEnd justify-end items-center -mt-10 max-container padding-container'>
        <img
          src={search}
          alt="search"
          className='size-[30px]'
        />
      </div>

      <div className='flex gap-14 text-white items-center text-[15px] justify-center mt-8 mb-10'>
        <p>01 Month</p>
        <p>03 Months</p>
        <p>06 Months</p>
        <p className='underline text-[#F52C56]'>01 year</p>
      </div>

      <div className='flex flex-row items-center justify-center gap-10 text-white text-[15px] mb-7'>
        <div className='flex flex-row items-center gap-3'>
          <span className='w-[10px] h-[10px] rounded-full bg-[#6663FA]'></span>
          <p>Your Point</p>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <span className='w-[10px] h-[10px] rounded-full bg-yellow-10'></span>
          <p>Average Point</p>
        </div>
      </div>

      <div className='max-container padding-container'>
        <img
          src={statistics3}
          alt="statistics3"
        />

        <div className='flex flex-row text-white text-[13px] gap-14 justify-center mb-10 mt-2'>
          <p>JUL</p>
          <p>AUG</p>
          <p>SEP</p>
          <p>OCT</p>
          <p>NOV</p>
          <p>DEC</p>
        </div>

        <div className='mt-2 flex gap-24 justify-center'>
          <div className='flex flex-col justify-center align-middle items-center'>
            <p className='text-white text-[18px]'>Total Points</p>
            <p className='text-white font-medium text-[30px]'>2.354</p>
          </div>
          <div className='flex flex-col justify-center align-middle items-center'>
            <p className='text-white text-[18px]'>Avg. Points per Run</p>
            <p className='text-white font-medium text-[30px]'>98</p>
          </div>
        </div>

        <div className='mt-8 mb-10'>
          <AnalyticsCard />
        </div>

        <div className='pb-2 flex justify-center'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Analytics