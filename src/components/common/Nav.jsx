import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('');

    return (
        <nav className="max-container flexStart padding-container relative z-30 bg-[#141922] shadow-md h-[50px]">
            <div className='text-white text-[15px] flex flex-row justify-center items-center gap-5 w-full'>
                <Link 
                    to="/" 
                    onClick={() => setActiveLink('Fitness')} 
                    className={activeLink === 'Fitness' ? 'underline text-[#F52C56]' : ''}
                >
                    Fitness
                </Link>
                <Link 
                    to="/statistics" 
                    onClick={() => setActiveLink('Statistics')} 
                    className={activeLink === 'Statistics' ? 'underline text-[#F52C56]' : ''}
                >
                    Statistics
                </Link>
                <Link 
                    to="/analytics" 
                    onClick={() => setActiveLink('Analytics')} 
                    className={activeLink === 'Analytics' ? 'underline text-[#F52C56]' : ''}
                >
                    Analytics
                </Link>
                <Link 
                    to="/profile" 
                    onClick={() => setActiveLink('Profile')} 
                    className={activeLink === 'Profile' ? 'underline text-[#F52C56]' : ''}
                >
                    Profile
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
