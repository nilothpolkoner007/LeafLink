import React from 'react';
import { Menu, X, ShoppingBag, TreePine } from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';
import MobileNavLink from './MobileNavLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-green-50 border-b border-green-100'>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <TreePine className='h-8 w-8 text-green-600' />
            <span className='text-xl font-bold text-green-800'>LEAFLINK</span>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <NavLink href='/ PlantTreesPage'>Plant Trees</NavLink>
            <NavLink href='/plastic'>Reduce Plastic</NavLink>
            <NavLink href='/calculator'>Impact Calculator</NavLink>
            <NavLink href='/community'>Community</NavLink>
            <NavLink href='/shop'>Shop</NavLink>
            <div className='flex items-center space-x-4'>
              <button className='relative'>
                <ShoppingBag className='h-6 w-6 text-green-800' />
                <span className='absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                  0
                </span>
              </button>
              <button className='bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors'>
                Sign In
              </button>
            </div>
          </div>

          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className='h-6 w-6 text-green-800' />
            ) : (
              <Menu className='h-6 w-6 text-green-800' />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden pt-4 pb-3 space-y-3'>
            <MobileNavLink href='/plant'>Plant Trees</MobileNavLink>
            <MobileNavLink href='/plastic'>Reduce Plastic</MobileNavLink>
            <MobileNavLink href='/calculator'>Impact Calculator</MobileNavLink>
            <MobileNavLink href='/community'>Community</MobileNavLink>
            <MobileNavLink href='/shop'>Shop</MobileNavLink>
            <button className='w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors'>
              Sign In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}