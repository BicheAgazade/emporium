import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";

function Faq() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "faq");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div className="footer-category-info-div">
        <div className="footer-category-inner-info-div">
          <h3 className="footer-category-title-h2">
            1. HOW DO I DETERMINE WHETHER THE GOODS ARE AVAILABLE?
          </h3>
          <p className="footer-category-info-p">
            Each product page lists all available sizes. If the size you want is
            not in the drop-down list, then it is out of stock.
          </p>
          <h3 className="footer-category-title-h2">2. HOW TO BUY?</h3>
          <p className="footer-category-info-p">
            Select the desired product and size you would like to purchase and
            click the `Add to cart` button. When you have added the items that
            you would like to purchase click on the shopping bag icon in the top
            right hand corner. Go to the shopping cart and select `Checkout`.
            After entering your name and contact details you can select `deliver
            to address` or `pick up from store`. You are given the payment
            option of card or cash. If you select card you can proceed by
            clicking `go to payment` where you will be taken to the bank to
            complete your order. If you have selected the `cash`` option you can
            confirm your order. You will be sent an SMS confirming your order
            number, and our representative will contact you shortly.
          </p>
          <h3 className="footer-category-title-h2">
            3. HOW SAFE IS IT TO ORDER ONLINE?
          </h3>
          <p className="footer-category-info-p">
            Credit card information is not stored on our server. After placing
            your order, we direct you to PashaBank page for payment by credit
            card.
          </p>
          <h3 className="footer-category-title-h2">
            4. MY PAYMENT IS NOT ACCEPTED, WHAT SHOULD I DO?
          </h3>
          <p className="footer-category-info-p">
            If your payment is not accepted, you can find out about the reasons
            for the refusal on PashaBank`s payment page. These can be incorrect
            credit card number, insufficient funds in your account, expiration
            date, or an incorrect CVC number.
          </p>
          <h3 className="footer-category-title-h2">
            5. CAN I REFUND OR CHANGE AN ORDER?
          </h3>
          <p className="footer-category-info-p">
            If for any reason you want to refund or change your order, you can
            do so within 14 calendar days from the date of delivery, from Monday
            to Sunday from 10:00 to 20:00. Contact us by phone +994 51 555 55 55
            / +994 12 444-44-44 or by e-mail info@examle.com.
          </p>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}

export default Faq;
