

import Link from 'next/link'
import React from 'react'
import Menu from '@/components/Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false;
  return (
    <div className='flex items-center justify-between h-12 text-red-500 border-b-2 border-b-red-500 p-4 uppercase md:h-24 lg:px-20 xl:px-40'>
      
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>

      </div>
      
      {/* Logo */}

      <div className='text-xl md:font-bold flex-1 md:text-center'>
          <Link href={'/'}>Massimo</Link>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* Right Links */}

      <div className='hidden md:flex gap-4 justify-end flex-1'>

        <div className='md:absolute top-3 right-3 lg:static flex items-center gap-2 bg-orange-300 px-1 rounded-md'>
          <Image src={"/phone.png"} alt="phone pic" width={20} height={20} />
          <span>123 485 889</span>
        </div>
        {
          !user ? (<Link href={'/login'}>Login</Link>
           ):( <Link href={'/orders'}>Orders</Link>)
        }
       <CartIcon/>

      </div>

    </div>
  )
}

export default Navbar