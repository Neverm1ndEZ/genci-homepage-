'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BannerCarousel() {
  const links = [
    { label: 'https://pbs.twimg.com/media/Dhcb-UYX0AAg3Jv.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  ];
  return (
    <>
      <div className="parent">
        <Swiper
          pagination={true}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="tech"
        >
          {links.map((link) => (
            <SwiperSlide>
              <img src={link.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
