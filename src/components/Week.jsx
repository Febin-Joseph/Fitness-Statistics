import React from 'react'

const Week = ({ day, date, current }) => {
    return (
            <div className='flex flex-col'>
                <p className='text-white text-[13px]'>{day}</p>
                {current === true ? (
                    <span className='rounded-[50%] w-[30px] h-[30px] bg-yellow-10 mt-3 flex items-center justify-center'>
                        <p className='text-white font-medium text-[19px]'>{date}</p>
                    </span> ) : (
                    <p className='text-white font-medium text-[19px] pt-3'>{date}</p>
                    )
                }
            </div>
    )
}

export default Week