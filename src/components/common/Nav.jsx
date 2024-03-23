import React from 'react'

const Nav = () => {
    return (
        <nav className="max-container flexStart padding-container px-6 
    relative z-30 py-5 bg-white-10 shadow-md h-[70px]">
            <a href="/">
                <img src={logo} alt="tramona-logo" />
            </a>
        </nav>
    )
}

export default Nav