import React from 'react'
import { analyticsIcon, running } from '../../constant'

const AnalyticsCard = () => {
    return (
        <div className='bg-[#2B303D] min-w-[220px] min-h-[130px] max-container padding-container rounded-4xl pt-4 pb-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-white font-medium text-[25px]'>Game Detail</h1>
                <div className='flex flex-row items-center justify-end gap-3 '>
                    <span className='w-[10px] h-[10px] rounded-full bg-yellow-10'></span>
                    <p className='text-white flex justify-end items-center'>Sprint</p>
                </div>
            </div>
            <div className='pt-10'>
                <img src={analyticsIcon} alt="Analytics" />
                <div className='flex flex-row text-white text-[13px] gap-12 justify-center mb-5 mt-5'>
                    <p>01</p>
                    <p>04</p>
                    <p>08</p>
                    <p>12</p>
                    <p>16</p>
                    <p>20</p>
                    <p>24</p>
                </div>

                <div className='flex justify-center items-center flex-col pb-4'>
                    <p className='text-white text-[18px] font-bold'>You were<span className='text-[#F52C56] text-[20px]'> 48%</span> slower than Usually Today</p>
                    <span className="w-[70%] h-[2px] bg-gray-700 mt-4"></span>
                </div>

                <div className='pl-4 mt-3'>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='flex flex-row items-center gap-3'>
                            <img
                                src={running}
                                alt="running"
                                className='size-[25px]'
                            />
                            <p className='text-white text-[15px]'>Max Speed</p>
                        </div>

                        <div className='flex flex-col items-end'>
                            <p className="text-white text-[24px] font-bold">18.7
                                <span className='text-[15px] text-yellow-10'> Km/h</span>
                            </p>
                            <p className='text-[13px] text-white font-normal'>Personal Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsCard