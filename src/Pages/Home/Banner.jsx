import banner1 from "../../assets/slider-2.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="relative w-full h-72 md:h-96 bg-cover bg-center lg:h-screen"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="section absolute top-1/2 left-12 md:left-24 lg:left-32 transform -translate-y-1/2 w-72 md:w-96 lg:w-[500px]">
              <div className="">
                <h1 className="md:text-lg lg:text-2xl font-semibold text-purple-700 ">
                  Welcome To Swisskem Healthcare
                </h1>
                <h2 className="md:text-3xl font-bold text-pink-500 mt-2">
                  Manufacture of Cosmetic & Dermatological Skin Care Products
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-72 md:h-96 bg-cover bg-center lg:h-screen"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="section absolute top-1/2 left-12 md:left-24 lg:left-32 transform -translate-y-1/2 w-72 md:w-96 lg:w-[500px]">
              <div className="">
                <h1 className="md:text-lg lg:text-2xl font-semibold text-purple-700 ">
                  Welcome To Swisskem Healthcare
                </h1>
                <h2 className="md:text-3xl font-bold text-pink-500 mt-2">
                  Manufacture of Cosmetic & Dermatological Skin Care Products
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
