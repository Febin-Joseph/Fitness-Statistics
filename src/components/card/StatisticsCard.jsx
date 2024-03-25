import React from 'react'

const StatisticsCard = ({ number, text, icon, color }) => {
    return (
        <div className={`${color} min-w-[220px] min-h-[130px] pl-5 rounded-3xl pb-2`}>
            <h1 className={`text-white text-[34px] font-medium pt-2`}>{number}</h1>
            <p className='text-[15px] text-white font-regular'>{text}</p>
                <img src={icon} alt="image" className='w-[180px]'/>
        </div>
    )
}

export default StatisticsCard