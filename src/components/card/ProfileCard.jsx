import React from 'react'

const ProfileCard = ({ text1, text2, classname }) => {
    return (
        <div className='bg-[#2B303D] min-w-[150px] min-h-[100px] rounded-3xl flex flex-col pt-2 items-center'>
            <h1 className={`text-yellow-10 ${classname} text-[35px] font-medium`}>{text1}</h1>
            <p className='text-[15px] text-white font-medium'>{text2}</p>
        </div>
    )
}

export default ProfileCard