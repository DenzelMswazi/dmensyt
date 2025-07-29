import React from 'react'
import { Title } from './ui/text';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between'>
        <div>
            <Title>
                Suit Up Like a Pro - Shop Dmens <br />
                Your Jersey. Your Team. Your Style.
            </Title>
            <Link href={"/shop"}></Link>
        </div>
        <div></div>
        </div>
  )
}

export default HomeBanner;