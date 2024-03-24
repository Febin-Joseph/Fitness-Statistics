import React from 'react'
import { mainmenu, profile, setting } from '../../constant'

const Menu = () => {
  return (
    <div className='bg-[#fff] w-fit'>
      <ul>
        <li><img src={setting} alt="setting" /></li>
        <li><img src={mainmenu} alt="setting" /></li>
        <li><img src={profile} alt="setting" /></li>
      </ul>
    </div>
  )
}

export default Menu