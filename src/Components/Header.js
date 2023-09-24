import React from 'react'
import Logo from '../assets/newlogo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='logo' className='border border-white' />
          </a>
          <button className='btn btn-sm'>Contact me</button>
        </div>
      </div>
    </header>
  )
}

export default Header
