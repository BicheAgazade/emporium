import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function GiftCard() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "gift-card");
 useEffect(() => {
   AOS.init();
   AOS.refresh();
 }, []);
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div
        data-aos="fade-up"
        data-aos-duration="1800"
        className="footer-category-info-div"
      >
        <div className="footer-category-inner-info-div">
          <p className="footer-category-info-p">
            Cards are the best gift for holidays and special occasions! With
            this card you can make purchases in our stores as well as online
            orders. You can order cards of any denomination starting from 100
            AZN.
          </p>
          <p className="footer-category-info-p">
            Users guide to rules and regulations of a gift card:
          </p>
          <ul className="footer-category-info-ul">
            <li>
              - After having purchased the gift card from our web-site or one of
              our physical stores, you may proceed to use it in the purchase
              location.
            </li>
            <li>
              - The gift card operates with an expiration period of 1 (one)
              year, the countdown of which starts the moment the said card is
              purchased.
            </li>
            <li>
              - The gift card may only be used for purchase purposes, it does
              not imply cash-out, refund, or cash-in activities.
            </li>
            <li>
              - The products purchased via a gift card are subject to the usual
              exchange and return rules. The products may be exchanged and
              returned within 14 days after being purchased; in the case of
              product return you may receive your gift card back with return
              amount in balance (if the said card hasnt expired by that time).
            </li>
            <li>
              - Should the price of a desired product be below the dignity of
              your gift card, the leftover amount will be added back to your
              gift card balance after the purchase is complete.
            </li>
            <li>
              - Should the price of a desired product be above the dignity of
              your gift card, the insufficient amount may be topped up by cash
              or cashless payment means. You may only use 1 (one) gift card for
              1 (one) purchase.
            </li>
            <li>
              - “Sinteks” LLC and stores do not bear responsibility for the lost
              or damaged (broken, scratched, cracked, or impossible to use) gift
              card.
            </li>
            <li>
              - Purchase and use of the gift card is equivalent to consent with
              its rules and regulations.
            </li>
          </ul>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}

export default GiftCard;
