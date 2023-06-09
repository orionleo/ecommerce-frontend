"use client";

import { useState } from 'react'

import NavbarMenu from './navbar-menu';
import NavbarActions from './navbar-actions';
import NavbarLogo from './navbar-logo';
import NavbarMobileButton from './navbar-mobile-button';

import NavbarMobile from '../navbar-mobile';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-gray-200 flex h-16 items-center">
      {/* Mobile Navigation */}
      <NavbarMobile open={open} onClose={() => setOpen(false)} />
      {/* Mobile toggle menu button */}
      <NavbarMobileButton onClick={() => setOpen(true)} />
      {/* Logo */}
      <NavbarLogo />
      {/* Menu */}
      <NavbarMenu />
      {/* Actions (Search, Cart, etc.) */}
      <NavbarActions />
    </div>
  );
};

export default Navbar;
