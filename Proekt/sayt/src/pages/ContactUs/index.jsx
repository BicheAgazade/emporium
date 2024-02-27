import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";

function ContactUs() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "contacts");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
    </div>
  );
}

export default ContactUs;
