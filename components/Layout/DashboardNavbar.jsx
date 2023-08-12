'use client';
import Link from 'next/link';
import Image from 'next/image';
import 'material-symbols';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Logo from '../../public/Genci Logo.png';
import './dashboardnavbar.module.css'
const DashboardNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className=" text-blue-600 dark:text-gray-50 fixed z-20">
      <nav className="hidden lg:flex w-24 h-screen fixed top-0 bg-gray-900 flex-col items-center py-7">
        <ul className="flex flex-col gap-9 items-center">
          <figure className='w-12 h-12'>
            <Image src={Logo} className='logo'/>
          </figure>
          <Link href="/" className="text-white h-8">
            <Button color="inherit">
              <span className="material-symbols-rounded">home</span>
            </Button>
          </Link>
          <Link href="../courses" className="text-white h-8">
            <Button color="inherit">
              <span className="material-symbols-rounded">school</span>
            </Button>
          </Link>
          <Link href="../analytics" className="text-white h-8">
            <Button color="inherit">
              <span className="material-symbols-rounded">leaderboard</span>
            </Button>
          </Link>
          <Link href="../notifications" className="text-white h-8">
            <Button color="inherit">
              <span className="material-symbols-rounded">notifications</span>
            </Button>
          </Link>
          <Link href="../community" className="text-white h-8">
            <Button color="inherit">
              <span className="material-symbols-rounded">groups</span>
            </Button>
          </Link>
        </ul>
      </nav>
      <Button
        className="lg:hidden absolute -z-10 left-1 top-5"
        onClick={handleMenuToggle}
        color="primary"
      >
        <span className="material-symbols-outlined bg-gray-900 px-4 outline-blue-500 py-3 rounded-full hover:outline">
          menu
        </span>
      </Button>
      {isNavbarOpen && (
        <nav className="w-20 h-screen  fixed top-0 bg-gray-900 flex flex-col items-center py-8 lg:hidden z-20">
          <ul className="flex flex-col gap-8 ">
            <Button onClick={handleMenuToggle} color="inherit">
              <span className="material-symbols-rounded">cancel</span>
            </Button>
            <Link href="../home" className="text-white h-8">
              <Button color="inherit">
                <span className="material-symbols-rounded">home</span>
              </Button>
            </Link>
            <Link href="../courses" className="text-white h-8">
              <Button color="inherit">
                <span className="material-symbols-rounded">school</span>
              </Button>
            </Link>
            <Link href="../analytics" className="text-white h-8">
              <Button color="inherit">
                <span className="material-symbols-rounded">leaderboard</span>
              </Button>
            </Link>
            <Link href="../notifications" className="text-white h-8">
              <Button color="inherit">
                <span className="material-symbols-rounded">notifications</span>
              </Button>
            </Link>
            <Link href="../community" className="text-white h-8">
              <Button color="inherit">
                <span className="material-symbols-rounded">groups</span>
              </Button>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DashboardNavbar;
