import React from 'react'
import Logo from '../assets/images/logo.svg'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'

function Header() {
  return (
    <div className='h-[66px] bg-Neutral-0 flex justify-between items-center px-3 py-2 rounded-[10px]'>
        <img src={Logo} alt="Logo de la empresa" />
        <button>
            <img src={IconMoon} alt="" />
        </button>
    </div>
  )
}

export default Header