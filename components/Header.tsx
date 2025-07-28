import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavouriteButton from './FavouriteButton';
import SignIn from './SignIn';
import MobileMenu from './MobileMenu';
import { Currency } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';

const Header = async() => {
  const user = await currentUser();
  console.log(user, "user");

  return (
    <header className='bg-white py-5 border-b border-gray-200'>
        <Container className='flex items-center justify-between text-lightColor'>
            {/* Logo */}
            <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
               <MobileMenu />
              <Logo />
              </div>
            <HeaderMenu />
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
              <SearchBar />
              <CartIcon />
              <FavouriteButton />
              <ClerkLoaded> 
                <SignedIn></SignedIn>
                <SignIn />
                </ClerkLoaded>
            </div>
            {/* NavButton */}
        </Container>
    </header>
  )
}

export default Header;