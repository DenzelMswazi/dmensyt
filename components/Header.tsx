import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavouriteButton from './FavouriteButton';
import SignIn from './SignIn';

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-gray-200'>
        <Container className='flex items-center justify-between'>
            {/* Logo */}
            <Logo />
            <HeaderMenu />
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
              <SearchBar />
              <CartIcon />
              <FavouriteButton />
              <SignIn />
            </div>
            {/* NavButton */}
        </Container>
    </header>
  )
}

export default Header;