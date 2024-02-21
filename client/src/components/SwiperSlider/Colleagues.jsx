import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Colleagues = () => {
  return (
    <div id="colleagues-slider" style={{ marginTop: "50px" }}>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/images/other/socar.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/pasha_holding.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/mudafie.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/azeriqaz.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/bakusteelcompany.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/scc.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/temizqaz.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/other/capp3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Colleagues;
