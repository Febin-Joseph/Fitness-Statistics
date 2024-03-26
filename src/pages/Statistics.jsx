import React from 'react'
import { curve, line, running, search, statistics2, swimming } from '../constant'
import { useNavigate } from 'react-router-dom';
import Week from '../components/Week';
import StatisticsCard from '../components/card/StatisticsCard';
import DashboardCard from '../components/card/DashboardCard';
import Menu from '../components/common/Menu';

const Statistics = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bgBlue-10 min-h-screen pt-5">
      <div className='max-container padding-container'>
        <h1 className='text-white  text-[15px] '>Reports</h1>
        <h6 className='text-white font-bold text-[30px]'>Statistics</h6>
      </div>

      <div className='flexEnd justify-end items-center -mt-10 max-container padding-container'>
        <img
          src={search}
          alt="search"
          className='size-[30px]'
        />
      </div>

      <div className='mt-10 max-container padding-container mb-5'>
        <div className='mt-5 flex gap-10 justify-center'>
          <Week
            day={'MON'}
            date={'14'}
          />

          <Week
            day={'TUE'}
            date={'15'}
            current={true}
          />

          <Week
            day={'WED'}
            date={'16'}
          />
          <Week
            day={'THU'}
            date={'17'}
          />
          <Week
            day={'FRI'}
            date={'18'}
          />
          <Week
            day={'SAT'}
            date={'19'}
          />
          <Week
            day={'SUN'}
            date={'20'}
          />

        </div>
      </div>

      <div className='mt-5 max-container padding-container mb-10 flex flex-row gap-3'>
        <StatisticsCard
          number={'1,26,435'}
          text={'PAGE VIEWS'}
          icon={curve}
          color={'bg-[#6763FF]'}
        />

        <StatisticsCard
          number={'26.84%'}
          text={'BOUNCE RATE'}
          icon={line}
          color={'bg-[#FF0051]'}
        />
      </div>

      <div className='mt-5 max-container padding-container'>
        <h1 className='text-white font-medium text-[22px]'>Summary Report</h1>

        <div className='mt-3 flex flex-row gap-3'>
          <DashboardCard
            text1={'2,846 Km'}
            text2={'Running'}
            color={'text-[#6663FA]'}
            icon={running}
            classname={'text-[30px] pt-5 pb-4'}
          />

          <DashboardCard
            text1={'10:45 Hrs'}
            text2={'Swimming Pool'}
            color={'text-yellow-10'}
            icon={swimming}
            classname={'text-[30px] pt-5 pb-4'}
          />
        </div>
      </div>

      <div className='flex gap-14 text-white items-center text-[15px] justify-center mt-8 mb-10'>
        <p>01 Month</p>
        <p className='underline text-[#F52C56]'>03 Months</p>
        <p>06 Months</p>
        <p onClick={() => navigate('/analytics')}>01 year</p>
      </div>

      <div className='max-container padding-container'>
        <img src={statistics2} alt="statistics2" />
      </div>

      <div className='flex flex-row text-white text-[13px] gap-8 justify-center mb-16'>
        <p>SEP 01</p>
        <p>SEP 08</p>
        <p>SEP 15</p>
        <p>SEP 22</p>
        <p>SEP 29</p>
        <p>OCT 06</p>
      </div>

      <div className='pb-2 flex justify-center'>
        <Menu />
      </div>
    </div>
  )
}

export default Statistics;