import React, { useEffect, useState } from 'react';
import { mainmenu, profile, setting } from '../../constant';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(1);

  useEffect(() => {
    const links = document.getElementsByTagName("li");
    const circle = document.getElementById("circle");

    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        const iconOffset = i * 80;
        if (i === 0) { 
          circle.style.left = (iconOffset + 50) + "px"; 
        } else if (i === 0) {
          circle.style.left = (iconOffset + 50) + "px"; 
        } else {
          circle.style.left = iconOffset + "px";
        }
        setActiveIcon(i);
      };
    }
  }, []);

  return (
    <div className='bg-[#2B303D] flex h-[70px] w-[80%] items-center justify-center
                      rounded-t-[10px] rounded-b-[50px] relative'>
      <ul className='flex gap-40 z-10 relative'>
        <li className={activeIcon === 0 ? 'hidden' : ''}><img src={setting} alt="setting" className='size-8' /></li>
        <li className={activeIcon === 1 ? 'hidden' : ''}><img src={mainmenu} alt="mainmenu" className='size-8' /></li>
        <li className={activeIcon === 2 ? 'hidden' : ''}><img src={profile} alt="profile" className='size-8' onClick={() => navigate('/profile')} /></li>
      </ul>
      <div id='circle' className='absolute items-center justify-center flex bg-red-500
                                 w-[70px] h-[70px] rounded-[50%] border-[7px] border-bgBlue-10
                                 top-[-35px] left-[calc(50% - 35px)]'>
        <img src={activeIcon === 0 ? setting : activeIcon === 1 ? mainmenu : profile} alt="icon" className='size-8' />
      </div>
    </div>
  );
};

export default Menu;
