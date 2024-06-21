"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel(){
  return (
    <section className="w-full">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            slidesPerView={5}
            modules={[Autoplay, Navigation, Pagination]}
          >
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-1.png" alt="1"></img></div></SwiperSlide>
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-2.png" alt="2"></img></div></SwiperSlide>
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-3.png" alt="3"></img></div></SwiperSlide>
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-4.png" alt="4"></img></div></SwiperSlide>
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-5.png" alt="5"></img></div></SwiperSlide>
              <SwiperSlide key={1}><div className="flex justify-center"><img src="/client-logo-2.png" alt="5"></img></div></SwiperSlide>
          </Swiper>
        </ul>
    </section>
  );
};
