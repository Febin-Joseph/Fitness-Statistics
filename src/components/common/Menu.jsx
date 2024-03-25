import React, { useEffect } from 'react';
import { mainmenu, profile, setting } from '../../constant';

const Menu = () => {

  useEffect(() => {
    let links = document.getElementsByTagName("li");
    let circle = document.getElementById("circle");

    for (let link of links) {
      link.onclick = function () {

        for (let link of links) {
          link.style.opacity = "1";
        }

        circle.style.left = (80 * this.value) + "px";
        circle.innerHTML = this.innerHTML;
        this.style.opacity = "0";
      };
    }
  }, []);

  return (
    <div className='bg-[#2B303D] flex h-[70px] w-[80%] items-center justify-center
                      rounded-t-[10px] rounded-b-[50px] relative'>
      <ul className='flex gap-24 z-10'>
        <li><img src={setting} alt="setting" className='size-8' /></li>
        <li><img src={mainmenu} alt="setting" className='size-8 opacity-0' /></li>
        <li><img src={profile} alt="setting" className='size-8' /></li>
      </ul>
      <div id='circle' className='absolute items-center justify-center flex bg-red-500
                                 w-[70px] h-[70px] rounded-[50%] border-[7px] border-bgBlue-10
                                 top-[-35px] left-[calc(50% - 35px)]'>

        <img src={mainmenu} alt="setting" className='size-8' />
      </div>
    </div>
  );
};

export default Menu;