import { AlignLeft } from 'lucide-react';
import React from 'react'

const MobileMenu = () => {
  return (
    <>
    <button>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer md:gap-0'/>
    </button>
    </>
  )
}

export default MobileMenu;