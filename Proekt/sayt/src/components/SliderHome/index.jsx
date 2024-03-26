import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import choleHome from "../../imegs/home_chloe.jpg";
import manceraHome from "../../imegs/home_mancera.jpg";
import amouageHome from "../../imegs/home_amouage.jpg";
import yslHome from "../../imegs/home_ysl.jpg";
import { useNavigate } from "react-router-dom";

function HomeSlider() {
  const navigate = useNavigate();

  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Autoplay]}
      className="mySwiper-2"
    >
      <SwiperSlide className="slider-2">
        <img src={choleHome} alt="" />
        <div className="chloe-div">
          <h2>CHLOE FRAGRANCES</h2>
          <p>
            Explore a range of captivating and irresistibly intense fragrances.
            From Eau de Parfum to Eau de Toilette, Chloe luxury floral perfumes
            feature round, velvety, and fragrant facets that encapsulate the
            Chloé woman free spirit and timeless elegance.
          </p>

          <button
            onClick={() => navigate("/fragrance/all")}
            className="chloe-btn"
          >
            view the collection
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-2 ">
        <img src={manceraHome} alt="" />
        <div className="mancera-div">
          <h2>MANCERA FRAGRANCES</h2>
          <p>
            Mancera olfactory signature has been composed to please occidental
            and oriental intense perfumes lovers. Indeed, the creators wanted to
            father a very occidental brand with the intensity and the best
            ingredients of the Arab perfumes.
          </p>

          <button
            onClick={() => navigate("/fragrance/all")}
            className="chloe-btn"
          >
            view the collection
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-2 ">
        <img src={amouageHome} alt="" />
        <div className="amouage-div">
          <h2>AMOUAGE FRAGRANCES</h2>
          <p>
            Amouage uses the traditional materials of Middle Eastern perfumery,
            such as frankincense and myrrh, but the perfumes are developed by
            perfumers from the major Fragrance & Flavor companies and are geared
            towards an international clientele.
          </p>

          <button
            onClick={() => navigate("/fragrance/all")}
            className="amouage-btn"
          >
            view the collection
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-2">
        <img src={yslHome} alt="" />
        <div className="ysl-div">
          <h2>YVES SAINT LAURENT FRAGRANCES</h2>
          <p>
            You dont have to wait to experience Yves Saint Laurent cologne for
            men or perfume for women. Simply browse our website for the products
            that you currently use or want to try.
          </p>
          <button
            onClick={() => navigate("/fragrance/all")}
            className="amouage-btn"
          >
            view the collection
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider;
