import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";

function Loyalty() {
  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "loyalty");
  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
    </div>
  );
}

export default Loyalty;
