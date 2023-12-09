// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/ImageSwiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ImageSwiper({ images }) {
  const swiperParams = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...swiperParams}>
      {images.map((image, index) => (
        <SwiperSlide key={index} className="swiper-contain">
          <img
            src={image.image}
            alt={image.imageCaption}
            className="imgSwiper"
          />
          {image.imageCaption && (
            <div className="swiper-caption">
              <p>{image.imageCaption}</p>
            </div>
          )}
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
