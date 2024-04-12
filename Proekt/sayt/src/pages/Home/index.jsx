import "./style.css";
import forHer from "../../imegs/forHer2.jpg";
import unisex from "../../imegs/unisex.jpg";
import allPerfumery from "../../imegs/all.jpg";
import forHim from "../../imegs/kilian.jpg";
import HomeSlider from "../../components/SliderHome";
import {useNavigate } from "react-router-dom";
import { useCategory } from "../../CategoryContext";
import FragranceInfo from "../../components/FragranceInfo";
import BestSeller from "../../components/BestSellers";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
const { scrollToTop } = useCategory();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <HomeSlider />
      <FragranceInfo />
      <BestSeller />
      <div className="main-depart-div">
        <div className="inner-depart-div">
          <div className="line"></div>
          <span className="depart-span">Choose a department</span>
          <div className="line"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1800"
          className="main-depart-img-div"
        >
          <div
            onClick={() => {
              navigate("/fragrance/woman");
              scrollToTop();
            }}
            className="inner-depart-img-div"
          >
            <img src={forHer} alt="" />
            <p className="section-p">Women</p>
            <div className="dark-depr-div"></div>
          </div>
          <div
            onClick={() => {
              navigate("/fragrance/man");
              scrollToTop();
            }}
            className="inner-depart-img-div"
          >
            <img src={forHim} alt="" />
            <p className="section-p">Men</p>
            <div className="dark-depr-div"></div>
          </div>
          <div
            onClick={() => {
              navigate("/fragrance/unisex");
              scrollToTop();
            }}
            className="inner-depart-img-div"
          >
            <img src={unisex} alt="" />
            <p className="section-p">Unisex</p>
            <div className="dark-depr-div"></div>
          </div>
          <div
            onClick={() => {
              navigate("/fragrance/all");
              scrollToTop();
            }}
            className="inner-depart-img-div"
          >
            <img src={allPerfumery} alt="" />
            <p className="section-p">Fragrance</p>
            <div className="dark-depr-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
