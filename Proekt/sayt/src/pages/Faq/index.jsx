import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";

function Faq() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "faq");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
    </div>
  );
}

export default Faq;
