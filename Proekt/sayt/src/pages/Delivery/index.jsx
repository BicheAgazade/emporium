import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";

function Delivery() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "delivery");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div className="footer-category-info-div">
        <div className="footer-category-inner-info-div">
          <p className="footer-category-info-p">
            When ordering, you are offered three delivery options:
          </p>
          <ul className="footer-category-info-ul">
            <li>
              - Goods ordered before 16:00 will be delivered the same day;
            </li>
            <li>- Goods ordered after 16:00 will be delivered the next day;</li>
            <li>
              - You can collect your order from our store EMPORIUM located at
              151/153, Neftchilar Avenue, Port Baku.
            </li>
          </ul>
          <p className="footer-category-info-p">
            On holidays and sale, delivery will be carried out in the course of
            two days.
          </p>
          <p className="footer-category-info-p">
            Delivery is free for orders over 100 AZN if the product is
            purchased. For orders under 100 AZN, delivery is 5 AZN in Baku and
            10 AZN in Absheron.
          </p>
          <p className="footer-category-info-p">
            You can also take advantage of the opportunity to order several
            products and pay for the number of products you keep.
          </p>
          <p className="footer-category-info-p">
            Regardless of the amount of the order, if the purchase of the
            product is refused you will be charged for the delivery in Baku – 5
            AZN, in Absheron – 10 AZN.
          </p>
          <p className="footer-category-info-p">
            The courier will wait up to 30 minutes for free. 5 AZN is paid for
            every additional 30 minutes.
          </p>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}

export default Delivery;
