import "./style.css";
import { useCategory } from "../../CategoryContext";

function FooterHeader({ infoTitle }) {
  const { selectedSection, handleCategoryClick } = useCategory();

  return (
    <div className="footer-header-main-div">
      <div className="footer-inner-main-div" key={infoTitle.category}>
        <img src={infoTitle.img} alt="" />

        <div className="footer-header-title-div">
          <h2>{infoTitle.title}</h2>
          <ul className="footer-header-ul">
            <li
              className={selectedSection === "contacts" ? "selected" : ""}
              onClick={() => handleCategoryClick("contacts")}
            >
              CONTACT US
            </li>
            <li
              className={selectedSection === "faq" ? "selected" : ""}
              onClick={() => handleCategoryClick("faq")}
            >
              FAQ
            </li>
            <li
              className={selectedSection === "loyalty" ? "selected" : ""}
              onClick={() => handleCategoryClick("loyalty")}
            >
              LOYALTY PROGRAM
            </li>
            <li
              className={selectedSection === "delivery" ? "selected" : ""}
              onClick={() => handleCategoryClick("delivery")}
            >
              DELIVERY TERMS
            </li>
            <li
              className={selectedSection === "paymant" ? "selected" : ""}
              onClick={() => handleCategoryClick("paymant")}
            >
              PAYMENT METHODS
            </li>
            <li
              className={selectedSection === "returns" ? "selected" : ""}
              onClick={() => handleCategoryClick("returns")}
            >
              RETURN AND EXCHANGE
            </li>
            <li
              className={selectedSection === "gift-cards" ? "selected" : ""}
              onClick={() => handleCategoryClick("gift-cards")}
            >
              GIFT CARDS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterHeader;
