import { useSelector } from "react-redux";
import "./style.css";

const BasketBadge = () => {
  const { cartList } = useSelector((state) => state);

  return (
    <div className="fav-badge">
      <span>{cartList.length}</span>
    </div>
  );
};

export default BasketBadge;
