import React from 'react'

const DashboardCard = ({ text1, text2, color, icon, classname }) => {
  return (
    <div className='bg-[#2B303D] min-w-[220px] min-h-[130px] pl-6 rounded-3xl'>
      <h1 className={`${color} ${classname} font-bold`}>{text1}</h1>
      {icon ? (
        <div className='flex flex-row gap-2'>
          <img src={icon} alt="image" className='size-7'/>
          <p className='text-[18px] text-white font-bold'>{text2}</p>
        </div>
      ) : (
        <p className='text-[18px] text-white font-bold'>{text2}</p>
      )}
    </div>
  )
}

export default DashboardCard