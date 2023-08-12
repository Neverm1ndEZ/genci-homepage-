'use client';
import Link from 'next/link';
import Image from 'next/image';
import 'material-symbols';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Logo from '../../public/Genci Logo.png';

const DashboardNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className=" text-blue-600 dark:text-gray-50 bg-gray-800  h-screen fixed z-20">
      <div className="">
        <Image src={Logo} alt="Genci Logo" width={96} height={82} />
      </div>
      <nav className="hidden lg:flex w-24 h-screen dark:bg-gray-800 flex-col items-center py-4">
        <ul className="flex flex-col gap-9">
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
    </div>
  );
};

export default DashboardNavbar;
