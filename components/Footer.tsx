import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText } from './ui/text';

const Footer = () => {
  return (
        <footer className='bg-white border-t'>
        <Container>
          <FooterTop />
          <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <Logo />
              <SubText className='text-gray-600 text-sm'>Discover authentic jerseys, premium quality, and unbeatable prices. From legendary classics to the latest releases, we bring your team spirit to life. Shop with confidence, wear with pride.
              </SubText>
              <SocialMedia className='text-darkColor/50'
               iconClassName='border-darkColor hover:border-shop_light_green hover:text-shop_light_green'
               tooltipClassName='bg-darkColor text-white'/>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          </Container>
        </footer>
  )
}

export default Footer;