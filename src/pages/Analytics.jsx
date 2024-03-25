import React from 'react'

const Analytics = () => {
  return (
    <div className="bg-bgBlue-10 min-h-screen">
      <div className='max-container padding-container'>
        <h1 className='text-white  text-[15px] '>Reports</h1>
        <h6 className='text-white font-bold text-[30px]'>Analytics Reports</h6>
      </div>

      <div className='flex gap-14 text-white items-center text-[15px] justify-center mt-8 mb-10'>
        <p>01 Month</p>
        <p className='underline text-[#F52C56]'>03 Months</p>
        <p>06 Months</p>
        <p>01 year</p>
      </div>
    </div>
  )
}

export default Analytics