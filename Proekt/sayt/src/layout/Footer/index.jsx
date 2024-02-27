import "./style.css";
import returnBox from "../../imegs/return-box.png";
import pay from "../../imegs/credit-card.png";
import delivery from "../../imegs/shipped.png";
import visa from "../../imegs/visa.png";
import master from "../../imegs/master.png";
import maestro from "../../imegs/maestro.png";
import facebook from "../../imegs/facebook.png";
import insta from "../../imegs/instagram.png";
import whatsapp from "../../imegs/whatsapp.png";
import { useNavigate } from "react-router";
import { useCategory } from "../../CategoryContext";

function Footer() {
  const navigate = useNavigate();
  const {handleCategoryClick, scrollToTop } = useCategory();

  return (
    <>
      <div className="main-first-footer-div">
        <div className="inner-firts-footer-div">
          <img src={pay} alt="" />
          <span>Safe & Easy Payments</span>
        </div>
        <div className="inner-firts-footer-div">
          <img src={delivery} alt="" />
          <span>Express delivery</span>
        </div>
        <div className="inner-firts-footer-div">
          <img src={returnBox} alt="" />
          <span>Quick & easy returns</span>
        </div>
      </div>

      <div className="main-second-footer-div">
        <div className="inner-second-footer-div">
          <p>EMPORIUM</p>
          <ul className="footer-ul">
            <li
              onClick={() => {
                navigate("/about");
                scrollToTop();
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/stores");
                scrollToTop();
              }}
            >
              Store Information
            </li>
          </ul>
        </div>
        <div className="inner-second-footer-div">
          <p>CUSTOMER SERVICE</p>
          <ul className="footer-ul">
            <li onClick={() => handleCategoryClick("gift-cards")}>
              Gift Cards{" "}
            </li>
            <li onClick={() => handleCategoryClick("loyalty")}>
              Loyalty Program
            </li>
            <li onClick={() => handleCategoryClick("faq")}>FAQ</li>
            <li onClick={() => handleCategoryClick("contacts")}>Contact Us</li>
          </ul>
        </div>
        <div className="inner-second-footer-div">
          <p>ONLINE SHOPPING</p>
          <ul className="footer-ul">
            <li onClick={() => handleCategoryClick("delivery")}>
              Delivery Terms
            </li>
            <li onClick={() => handleCategoryClick("returns")}>
              Return And Exchange
            </li>
            <li onClick={() => handleCategoryClick("paymant")}>
              Payment Methods
            </li>
          </ul>
        </div>
        <div className="inner-second-footer-div">
          <p>STORE CONTACT</p>
          <p>+994 55 555 55 55</p>
          <p>51, 153 Neftchiler Avenue</p>
        </div>
        <div className="inner-second-footer-div">
          <p>EMPORIUM ACCEPTS</p>
          <div className="paymant-card-div">
            <img className="payment-img" src={master} alt="" />
            <img className="payment-img" src={visa} alt="" />
            <img className="payment-img" src={maestro} alt="" />
          </div>
          <p>SOCIAL MEDIA</p>
          <div className="paymant-card-div">
            <img className="social-img" src={insta} alt="" />
            <img className="social-img" src={facebook} alt="" />
            <img className="social-img" src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
