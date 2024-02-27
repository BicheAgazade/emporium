import "./style.css";
import stores from "../../imegs/storesimg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import storesslider1 from "../../imegs/stores_slider_1.jpg";
import storesslider2 from "../../imegs/stores_slider_2.jpg";
import storesslider3 from "../../imegs/stores_slider_3.jpg";
import storesslider4 from "../../imegs/stores_slider_4.jpg";
import storesslider5 from "../../imegs/stores_slider_5.jpg";
import { useSpring, animated } from "react-spring";

function Stores() {
  
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
    <div className="stores-main-div">
      <div className="stores-line-div"></div>
      <div className="stores-content-div">
        <animated.img style={props1} src={stores} alt="" />
        <animated.div style={props2} className="stores-info-div">
          <h2 className="stores-info-h2">Emporium Port Baku</h2>
          <p className="stores-info-p">
            EMPORIUM takes pride in making sure that each one of Your luxury
            shopping needs is satisfied by the variety of offers and merchandise
            our departments offer - from the wide choices in luxury beauty
            products and fragrances, latest runway fashion collections for men,
            women, and kids, and luxury home decor, to selected Fine Jewelry
            brands and most seeked-out iconic leather pieces. In the meantime,
            EMPORIUM Cafe is here to make you feel most comfortable, energized,
            and rested throughout your luxury shopping journey.
          </p>
        </animated.div>
      </div>

      <div className="stores-map-main-div">
        <div className="stores-map-info-div">
          <h2 className="stores-map-info-h2">Our store details</h2>
          <p className="stores-title-p">Opening hours</p>
          <p className="stores-map-info-p">Monday-Sunday: 10am-10pm</p>
          <p className="stores-title-p">Store address</p>
          <p className="stores-map-info-p">
            153 Neftcilar Ave, AZ1001, Baku, Azerbaijan
          </p>
          <p className="stores-title-p">
            Contact: <span>+994 51 225 96 96</span>
          </p>
          <a
            className="map-btn"
            href="https://www.google.com/maps/place/Emporium+Port+Baku/@40.375643,49.8596011,16.25z/data=!4m6!3m5!1s0x40307d01b05ddaed:0xa76344f47aefa964!8m2!3d40.375823!4d49.8601234!16s%2Fg%2F1thsddn1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
        </div>
        <div className="stores-map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1277.945092267677!2d49.85929452499991!3d40.37599119936361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d01b05ddaed%3A0xa76344f47aefa964!2sEmporium%20Port%20Baku!5e0!3m2!1sru!2saz!4v1708977435458!5m2!1sru!2saz"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper-3 stores-swiper"
      >
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={storesslider1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={storesslider2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={storesslider3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={storesslider4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="about-slider">
          <img className="slider-about-img" src={storesslider5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Stores;
