import "./style.css";
import forHer from "../../imegs/forHer2.jpg";
import unisex from "../../imegs/unisex.jpg";
import allPerfumery from "../../imegs/all.jpg";
import forHim from "../../imegs/kilian.jpg";
import HomeSlider from "../../components/SliderHome";

function Home() {
  return (
    <div>
      <HomeSlider />

      <div className="main-depart-div">
        <div className="inner-depart-div">
          <div className="line"></div>
          <span className="depart-span">Choose a department</span>
          <div className="line"></div>
        </div>

        <div className="main-depart-img-div">
          <div className="inner-depart-img-div">
            <img src={forHer} alt="" />
            <p className="section-p">Women</p>
          </div>
          <div className="inner-depart-img-div">
            <img src={forHim} alt="" />
            <p className="section-p">Men</p>
          </div>
          <div className="inner-depart-img-div">
            <img src={unisex} alt="" />
            <p className="section-p">Unisex</p>
          </div>
          <div className="inner-depart-img-div">
            <img src={allPerfumery} alt="" />
            <p className="section-p">All Fragrance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
