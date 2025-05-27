import React from "react";
import { swiperSlider } from "../utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SimpleSlide = () => {
  return (
    <div className="py-20 bg-[#f7f7f7]">
      <div className="max-w-[1440px] px-4 mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {swiperSlider.map((obj, i) => (
            <SwiperSlide key={i} className="px-1">
              <div className="overflow-hidden w-full mx-auto rounded-xl shadow-lg bg-white">
                <img
                  className="w-full h-auto object-cover rounded-t-xl"
                  src={obj.stepImg}
                  alt={obj.heading}
                />
                <div className="bg-red-400 w-full p-5 text-white rounded-b-xl">
                  <h4 className="text-[20px] font-semibold pb-2">
                    {obj.heading}
                  </h4>
                  <p className="text-sm">{obj.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlide;
