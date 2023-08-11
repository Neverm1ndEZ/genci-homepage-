'use client';
import Tilt from 'react-parallax-tilt';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  const cardContainerRef = useRef(null);
  const touchStartRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const handleScroll = (event) => {
    event.preventDefault();
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += event.deltaY;
    }
  };

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
    cardContainerRef.current.addEventListener('wheel', handleScroll, {
      passive: false,
    });

    return () => {
      cardContainerRef.current.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="p-5 font-sans">
        <h2 className="font-semibold text-4xl">All Courses</h2>
        <div
          ref={cardContainerRef}
          className={`flex  overflow-y-auto space-x-4 p-6 scroll-smooth justify-items-center gap-10 ${
            showScrollbar ? 'hide-scrollbar' : ''
          }`}
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', // Hide scrollbar in Firefox
            WebkitOverflowScrolling: 'touch', // Enable momentum scrolling in Webkit
          }}
          onWheel={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96  border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sunset in the mountains"
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">Course Title</h2>
                  <p className=" font-sans text-sm bg-violet-500 rounded-md px-1">
                    Instructor name
                  </p>
                </div>
                <p className=" font-sans opacity-75 text-sm">
                  A small course description in one-two line. lorem epsum dabadu
                </p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1 ">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96  border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sunset in the mountains"
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">Course Title</h2>
                  <p className=" font-sans text-sm bg-violet-500 rounded-md px-1">
                    Instructor name
                  </p>
                </div>
                <p className=" font-sans opacity-75 text-sm">
                  A small course description in one-two line. lorem epsum dabadu
                </p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1 ">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96  border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sunset in the mountains"
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">Course Title</h2>
                  <p className=" font-sans text-sm bg-violet-500 rounded-md px-1">
                    Instructor name
                  </p>
                </div>
                <p className=" font-sans opacity-75 text-sm">
                  A small course description in one-two line. lorem epsum dabadu
                </p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1 ">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96  border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sunset in the mountains"
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">Course Title</h2>
                  <p className=" font-sans text-sm bg-violet-500 rounded-md px-1">
                    Instructor name
                  </p>
                </div>
                <p className=" font-sans opacity-75 text-sm">
                  A small course description in one-two line. lorem epsum dabadu
                </p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1 ">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="w-96  border font-sans overflow-hidden rounded-lg shadow"
            >
              <figure className="w-full h-40 object-cover overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sunset in the mountains"
                />
              </figure>
              <div className="px-3 py-2 flex flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-bold text-2xl">Course Title</h2>
                  <p className=" font-sans text-sm bg-violet-500 rounded-md px-1">
                    Instructor name
                  </p>
                </div>
                <p className=" font-sans opacity-75 text-sm">
                  A small course description in one-two line. lorem epsum dabadu
                </p>
                <div className="flex w-full justify-between py-1 pr-1">
                  <p className="text-2xl font-sans font-semibold">$10</p>
                  <button className="bg-red-500 text-gray-100 rounded-md px-1 ">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Cards;
