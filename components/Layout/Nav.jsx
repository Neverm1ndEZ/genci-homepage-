'use client';
import Link from 'next/link';
import 'material-symbols';
import React, { useState } from 'react';
import { Button } from '@mui/material';

const DashboardNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className=" text-blue-600 dark:text-gray-50 bg-gray-800  h-screen fixed z-20">
      <Button
        className="lg:hidden absolute -z-10 left-2   top-8 shadow-xl"
        onClick={handleMenuToggle}
        color="primary"
      >
        <span className="material-symbols-outlined">menu</span>
      </Button>
      <nav className="hidden lg:flex w-24 h-screen dark:bg-gray-800 flex-col items-center py-8">
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
      {isNavbarOpen && (
        <nav className="w-20 h-screen bg-gray-800 flex flex-col items-center py-8 lg:hidden z-20">
          <ul className="flex flex-col gap-8">
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
