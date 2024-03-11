import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";

function Loyalty() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "loyalty");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div className="footer-category-info-div">
        <div className="footer-category-inner-info-div">
          <h2 className="footer-category-title-h2">CONDITIONS</h2>
          <p className="footer-category-info-p">
            Emporium customers can receive a card upon purchases for the
            required balance for each card type listed below.
          </p>
          <h2 className="footer-category-title-h2">TYPES OF LOYAL CARDS:</h2>
          <h3 className="footer-category-title-h2">BEAUTY CARD</h3>
          <p className="footer-category-info-p">required balance - 85 AZN</p>
          <p className="footer-category-info-p">
            10% discount in the department of perfumery and cosmetics
          </p>
          <p className="footer-category-info-p">
            Advance notification of the latest collections, events, campaigns,
            and mor
          </p>
          <h3 className="footer-category-title-h2">SİLVER CARD</h3>
          <p className="footer-category-info-p">required balance - 1500 AZN</p>
          <p className="footer-category-info-p">exclusive discount - 7%</p>
          <p className="footer-category-info-p">
            Advance notification of the latest collections, events, campaigns,
            and more.
          </p>
          <p className="footer-category-info-p">
            Free delivery in the city of Baku on purchase
          </p>
          <p className="footer-category-info-p">Free gift wrapping</p>
          <h3 className="footer-category-title-h2">GOLD CARD</h3>
          <p className="footer-category-info-p">required balance - 4000 AZN</p>
          <p className="footer-category-info-p">exclusive discount - 10%</p>
          <p className="footer-category-info-p">Family account option</p>
          <p className="footer-category-info-p">
            Advance notification of the latest collections, events, campaigns,
            and more.
          </p>
          <p className="footer-category-info-p">
            Free delivery in the city of Baku on purchase
          </p>
          <p className="footer-category-info-p">Free gift wrapping</p>
          <h3 className="footer-category-title-h2">BLACK CARD</h3>
          <p className="footer-category-info-p">required balance - 8500 AZN</p>
          <p className="footer-category-info-p">exclusive discount - 15%</p>
          <p className="footer-category-info-p">Family account option</p>
          <p className="footer-category-info-p">
            Advance notification of the latest collections, events, campaigns,
            and more.
          </p>
          <p className="footer-category-info-p">
            Free delivery in the city of Baku on purchase
          </p>
          <p className="footer-category-info-p">Free gift wrapping</p>
          <h3 className="footer-category-title-h2">Family account</h3>
          <p className="footer-category-info-p">
            A family account is created for third parties who will be able to
            use the discount without the presence of the Loyalty Card holder.
            For a family account, one person is considered the primary owner of
            the discount card, and other persons, assigned by them, are
            considered users. The amounts of purchases made by users are
            included in the turnover of the main owner of the discount card. The
            discount on purchases is applied according to the card holders
            Loyalty Card status.
          </p>
          <p className="footer-category-info-p">
            Family accounts are available for Emporium Gold and Emporium Black
            cardholders. To use the loyalty discount, the owner of the card can
            add 2 (two) users to the Emporium Gold account and 3 (three) users
            to the Emporium Black account. Family account members must be
            nominated by the Cardholder in person and in advance.
          </p>
        </div>

        <NeedHelp />
      </div>
    </div>
  );
}

export default Loyalty;
