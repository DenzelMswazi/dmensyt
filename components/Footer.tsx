import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
        <footer className='bg-white border-t'>
        <Container>
          <FooterTop />
          <div>
            <div>
              <Logo />
              <p>Discover authentic jerseys, premium quality, and unbeatable prices. From legendary classics to the latest releases, we bring your team spirit to life. Shop with confidence, wear with pride.
              </p>
              <SocialMedia className='text-darkColor/50'
               iconClassName='border-darkColor hover:border-shop_dark_green hover:text-shop_dark_green'
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