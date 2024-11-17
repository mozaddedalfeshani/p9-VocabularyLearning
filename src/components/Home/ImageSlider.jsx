import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/swiper-bundle.css";

const images = [
  "https://schoolsweek.co.uk/wp-content/uploads/2019/05/Vocabluary-words-language-feat-1000x525.jpg",
  "https://www.quickanddirtytips.com/wp-content/uploads/2023/07/words.png",
  "https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/organizations/5d2656f1-9162-461d-88c7-b2505623d8cb/images/2DkrClvmYUS03wX2LyZWP7.jpeg",
  "https://www.thoughtco.com/thmb/FJWLzfHCmSIY2NX7OzpZz6BuK58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scrabble-5b4c6298c9e77c003725a215.jpg",
  "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/g6d56e72db_1717657694.jpg?size=*:900",
];

function CoverflowSlider() {
  return (
    <div className="w-full mx-auto my-8"> {/* Set container to full width */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true, // Makes the pagination dots clickable
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
        className="w-full rounded-lg shadow-lg"> {/* Set Swiper to full width */}
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg" // Use relative units for height
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoverflowSlider;
