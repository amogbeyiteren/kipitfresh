import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import MenuComponent from './Menu/Menu';
import Button from './Button';
import logo from '../assets/LOGO.svg'

const Header: React.FC = () => {
  const [placeholder, setPlaceholder] = useState('Search for fruits & vegetables');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 640;
      setIsMobile(isMobileView);
      setPlaceholder(isMobileView ? 'Search for fruits' : 'Search for fruits & vegetables');
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {user ? (
        <header className='bg-[#173e1f] h-[72px] w-full flex flex-row justify-between items-center p-2 sm:p-4 lg:p-5'>
          <div className='flex flex-row justify-start items-center h-full w-full sm:w-auto px-2 sm:px-5'>
            <MenuComponent />
            <a href='/' className='text-white text-[20px] sm:text-[25px] lg:text-[30px] font-semibold pl-4 sm:pl-10 lg:pl-28 cursor-pointer flex gap-2'>
            <img className='w-[40px] aspect-auto'
            src={logo}
            />
             
            </a>
           
            
            <div className='rounded-full w-full sm:w-[300px] lg:w-[420px] h-[35px] sm:h-[45px] bg-white ml-4 sm:ml-8 lg:ml-36 flex flex-row justify-start items-center p-2'>
              <CiSearch color='#173e1f' className='text-[20px] sm:text-[25px] lg:text-[30px]' />
              <input
                className='w-full pl-4 sm:pl-6 lg:pl-8 outline-none border-none text-xs sm:text-base'
                placeholder={placeholder}
              />
            </div>
          </div>
          <div className='flex justify-end items-center px-2 sm:px-5 gap-4'>
            <a href='/cart' className='h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] lg:h-[45px] lg:w-[45px] rounded-full bg-white flex justify-center items-center'>
              <CiShoppingBasket color='#173e1f' className='text-[20px] sm:text-[25px] lg:text-[30px]' />
            </a>
            <a href='/profile-management' className='h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] lg:h-[45px] lg:w-[45px] rounded-full bg-white flex justify-center items-center'>
              <CiUser color='#173e1f' className='text-[20px] sm:text-[25px] lg:text-[30px]' />
            </a>
          </div>
        </header>
      ) : (
        <header className='bg-[#7ED957] h-[72px] w-full flex flex-row justify-between items-center p-2 sm:p-4 lg:p-5'>
          <div className='flex flex-row justify-start items-center h-full w-full sm:w-auto px-2 sm:px-5'>
            <span className='text-[#173e1f] text-[20px] sm:text-[25px] lg:text-[30px] font-semibold pl-4 sm:pl-10 lg:pl-28'>
              KipitFresh
            </span>
          </div>
          <div className='flex justify-end items-center px-2 sm:px-5'>
          <a href='/login'><Button text={'Log In'} textColor={'#173e1f'}  font={'bold'} size={'sm'} />
          </a>{!isMobile && (
              <a href='/onboarding'><Button text={'Sign Up'} textColor={'#173e1f'} bgColor={'#fff'} font={'bold'} size={'sm'} rounded={'full'} shadow={true} />
              </a>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
