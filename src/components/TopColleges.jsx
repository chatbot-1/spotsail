import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TopColleges = () => {
  return (
    <div className="border">
      <div>
        <Swiper
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            748: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <div className="">
                  <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                    Atul Singh
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-gray-600 font-[400]">
                "I have taken medical services from them. They treat so well and
                they provide the best medical services."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopColleges;
