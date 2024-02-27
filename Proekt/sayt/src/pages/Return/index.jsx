import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";

function Returns() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "returns");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div className="footer-category-info-div">
        <div className="footer-category-inner-info-div">
          <p className="footer-category-info-p">
            You can return your purchase within 14 days from order delivery
            date. Please inform us about your intention to return the purchase
            via phone or email.
          </p>
          <p className="footer-category-info-p">
            Any items returned must be in the same condition in which you
            received them, without any damages or food odor. Tags and labels
            must be on the item. Items must be free of any signs of being worn
            or used. The till receipt that comes together with every order must
            be presented for all items returned. Otherwise the item will not be
            returned or exchanged. In case of successful refund, our employee
            with provide you with a refund receipt, confirming that the items
            returned have been taken back.
          </p>
          <p className="footer-category-info-p">
            Please consider that sale items and reduced items cannot be
            returned.
          </p>
          <p className="footer-category-info-p">
            See below list for non-refundable items:
          </p>
          <ul className="footer-category-info-ul">
            <li>- Gold and golden items</li>
            <li>- Items with precious or semi-precious stones</li>
            <li>- Fabric products</li>
            <li>- Perfumery and cosmetics</li>
            <li>- Mens, womens and kids beachwear</li>
            <li>- Underwear</li>
            <li>- Household goods</li>
            <li>- Personal hygiene products (toothbrushes, combs and etc.)</li>
            <li>- Toys</li>
            <li>- Mens, womens and kids socks and hosiery</li>
            <li>- Plastic containers for storing food products</li>
          </ul>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}

export default Returns;
