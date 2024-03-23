import React from 'react'

const DashboardCard = ({ text1, text2, color }) => {
  return (
    <div className='bg-[#2B303D] min-w-[220px] min-h-[130px] pl-6 rounded-3xl'>
      <h1 className={`${color} text-[50px] font-bold`}>{text1}</h1>
      <p className='text-[18px] text-white font-bold'>{text2}</p>
    </div>
  )
}

export default DashboardCard