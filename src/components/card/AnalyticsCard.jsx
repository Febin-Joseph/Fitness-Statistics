import React from 'react'
import { analyticsIcon } from '../../constant'

const AnalyticsCard = () => {
    return (
        <div className='bg-[#2B303D] min-w-[220px] min-h-[130px] max-container padding-container rounded-4xl pt-4'>
            <h1 className='text-white font-medium text-[25px]'>Game Detail</h1>
            <div className='flex flex-row items-center gap-3'>
                <span className='w-[10px] h-[10px] rounded-full bg-yellow-10'></span>
                <p className='text-white flex justify-end items-center'>Sprint</p>
            </div>
            <img src={analyticsIcon} alt="Analytics" />
        </div>
    )
}

export default AnalyticsCard