import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCube, Pagination, Autoplay } from "swiper";
import choleHome from "../../imegs/initio-home.jpg";
import manceraHome from "../../imegs/home_mancera.jpg";
import amouageHome from "../../imegs/home_amouage.jpg";
import yslHome from "../../imegs/mon-paris.jpg";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function HomeSlider() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="swiper-div-home">
      <Swiper
        autoplay={{ delay: 1500 }}
        loop={true}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper-2"
      >
        <SwiperSlide className="swiper-slider-home">
          <img src={yslHome} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-home">
          <img src={manceraHome} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-home">
          <img src={amouageHome} alt="" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slider-home">
          <img src={choleHome} alt="" />
        </SwiperSlide>
      </Swiper>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="swiper-info-div"
      >
        <h2>Choose the best scent from us</h2>
        <p>
          Elevate your experience with us because we dont settle for anything
          less than the best! Where every moment is an opportunity, every
          challenge is a stepping stone.
        </p>
        <button onClick={()=>navigate("/fragrance/all")}>SHOP NOW</button>
      </div>
    </div>
  );
}

export default HomeSlider;
