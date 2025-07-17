"use client";

import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react'
import SideMenu from './SideMenu';

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
    <button>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'/>
    </button>
    <SideMenu />
    </>
  )
}

export default MobileMenu;