'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EffectCarousel() {
  const link = [
    {
      label: 'https://wallpaperaccess.com/full/7228837.jpg',
    },
    {
      label:
        'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg',
    },
    { label: 'https://pbs.twimg.com/media/Dhcb-UYX0AAg3Jv.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { label: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  ];
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 50,
          modifier: 7,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {link.map((links, key) => (
          <SwiperSlide key={key}>
            <img src={links.label} className='w-full object-cover'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
