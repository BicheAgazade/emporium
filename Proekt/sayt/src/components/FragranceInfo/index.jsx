import "./style.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCategory } from "../../CategoryContext";

function FragranceInfo(){
      const navigate = useNavigate();
        const { scrollToTop } = useCategory();

 useEffect(() => {
   AOS.init();
   AOS.refresh();
 }, []);

const ShopNow=()=>{
    navigate("/fragrance/all")
    scrollToTop()
}

    return (
      <div className="fragrance-info-main-div">
        <div className="fragrance-info-inner-div">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="fragrance-info-img-div"
          >
            <img
              className="fragrance-info-small-img"
              src="https://websitedemos.net/inessa-perfumes-04/wp-content/uploads/sites/1112/2022/06/perfume-002.jpg"
              alt=""
            />
            <img
              className="fragrance-info-big-img"
              src="https://websitedemos.net/inessa-perfumes-04/wp-content/uploads/sites/1112/2022/06/bg-03.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="fragrance-info-div"
          >
            <p>Our original perfume</p>
            <h2>
              The <br /> new fragrance
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={ShopNow}>SHOP NOW</button>
          </div>
        </div>

        <div className="fragrance-info-inner-div">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1500"
            className="fragrance-info-div-2"
          >
            <p>eau de toilette</p>
            <h2>
              instinctive and <br /> electric
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button onClick={ShopNow}>SHOP NOW</button>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="1500"
            className="fragrance-info-img-div-2"
          >
            <img
              className="fragrance-info-big-img"
              src="https://websitedemos.net/inessa-perfumes-04/wp-content/uploads/sites/1112/2022/06/bg-04.jpg"
              alt=""
            />
            <img
              className="fragrance-info-small-img-2"
              src="https://websitedemos.net/inessa-perfumes-04/wp-content/uploads/sites/1112/2022/06/perfume-003.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default FragranceInfo