'use client';
import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  const cardContainerRef = useRef(null);
  const touchStartRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const Data = [
    {
      id: 0,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 1,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 2,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 3,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 4,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 5,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 6,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
    {
      id: 7,
      imagesrc:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imagealt: 'Sunset in the mountains',
      name: 'Instructor name',
      caption: 'A small course description in one-two line. lorem epsum dabadu',
      button: 'Show More',
    },
  ];

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (touchStartRef.current && cardContainerRef.current) {
      const touchEnd = event.touches[0].clientX;
      const touchDelta = touchEnd - touchStartRef.current;
      cardContainerRef.current.scrollLeft -= touchDelta;
      touchStartRef.current = touchEnd;
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  const handleMouseEnter = () => {
    setShowScrollbar(true);
  };

  const handleMouseLeave = () => {
    setShowScrollbar(false);
  };

  useEffect(() => {
    AOS.init();

    const handleScroll = (event) => {
      event.preventDefault();
      if (cardContainerRef.current) {
        cardContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    if (cardContainerRef.current) {
      cardContainerRef.current.addEventListener('wheel', handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className="p-5 font-sans">
      <h2 className="font-semibold text-4xl">All Courses</h2>
      <div
        ref={cardContainerRef}
        className={`flex overflow-y-auto space-x-4 p-6 scroll-smooth justify-items-center gap-10 ${
          showScrollbar ? 'hide-scrollbar' : ''
        }`}
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          overflowX: 'hidden',
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          WebkitOverflowScrolling: 'touch', // Enable momentum scrolling in Webkit
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Data.map((item) => (
          <Tilt key={item.id} scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96 border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src={item.imagesrc}
                  alt={item.imagealt}
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">{item.name}</h2>
                  <p className="font-sans text-sm bg-violet-500 rounded-md px-1">
                    {item.name}
                  </p>
                </div>
                <p className="font-sans opacity-75 text-sm">{item.caption}</p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Cards;
