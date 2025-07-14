import { headerData } from '@/constants/data';
import Link from 'next/link';
import React from 'react'

const HeaderMenu = () => {
  return (
    <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor'>
        {headerData.map((item) => (
            <Link key={item.title} href={item.href} className={`hover:text-shop_light_green hoverEffect relative group`}>
              {item.title}
              <span className={`absolute -bottom-0.5 left-1/2 w-1/2 h-0.5 bg-shop_light_green`}/>
              <span className={`absolute -bottom-0.5 right-1/2 w-1/2 h-0.5 bg-shop_light_green`}/>
            </Link>
        ))}
    </div>
  )
}

export default HeaderMenu;