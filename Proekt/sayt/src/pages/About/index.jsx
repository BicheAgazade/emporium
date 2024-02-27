import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import emporiumshop from "../../imegs/emporium_shop.jpg";
import aboutslider1 from "../../imegs/about_slider_1.jpg";
import aboutslider2 from "../../imegs/about_slider_2.jpg";
import aboutslider3 from "../../imegs/about_slider_3.jpg";
import aboutslider4 from "../../imegs/about_slider_4.jpg";
import aboutslider5 from "../../imegs/about_slider_5.jpg";
import { useSpring, animated } from "react-spring";

function About() {

  const props1 = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 1500 },
  });

  const props2 = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 1500 },
  });

  return (
    <div className="about-main-div">
      <div className="about-title-div">
        <animated.h2 style={props2} className="about-title-div-h2">
          About Emporium
        </animated.h2>
        <animated.p style={props2} className="about-title-div-p">
          Emporium is a multi-brand luxury concept store established in 2005.
          This main fashion destination situated in the very center of Baku City
          in the luxury shopping venue Port Baku Mall presents niche and
          high-class men and womens fashion apparel, sought beauty products and
          fragrances, fine jewelry, and revered designer home items.
        </animated.p>
      </div>
      <div className="about-info-main-div">
        <animated.img style={props1} src={emporiumshop} alt="" />
        <animated.div style={props2} className="about-info-inner-div">
          <p className="about-info-p">
            The concept store presents a three-floor unique and impressive
            creative vision, much to the recognition of the fashion world.
            Emporium feels proud to host and build strong friendly relationships
            with more than 500 global brands and designers of such as Bottega
            Veneta, Fendi, Miu Miu, Balenciaga, Givenchy, etc. Emporium is part
            of Sinteks Group of Companies, one of the largest and most
            successful fashion retailers in the Caucasus region, represented in
            over 50 stores.
          </p>
        </animated.div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper-3"
      >
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={aboutslider1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={aboutslider2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={aboutslider3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={aboutslider4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={aboutslider5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default About;
