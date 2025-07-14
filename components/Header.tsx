import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-gray-200'>
        <Container className='flex items-center justify-between'>
            {/* Logo */}
            <Logo />
            <HeaderMenu />
            <div>
              <SearchBar />
            </div>
            {/* NavButton */}
        </Container>
    </header>
  )
}

export default Header;