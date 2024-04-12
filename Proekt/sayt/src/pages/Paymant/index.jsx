import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import NeedHelp from "../../components/NeedHelp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Payment() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "payment");
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
            For online orders there are three payment methods to choose from:
            you can pay using any debit or credit card, or you can choose to pay
            with cash for both home delivery or when collecting in store.
          </p>
          <p className="footer-category-info-p">
            For EMPORIUM the security of online purchases is fundamental. All
            transactions are performed through secure payment systems.
            Confidential payment details are transmitted directly in encrypted
            format (SSL) to the bank.
          </p>
        </div>
        <NeedHelp />
      </div>
    </div>
  );
}

export default Payment;
