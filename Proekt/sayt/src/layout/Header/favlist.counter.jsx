import { useSelector } from "react-redux";
import "./style.css";

const FavBadge = () => {
  const { favList } = useSelector((state) => state);

  return (
    <div className="fav-badge">
      <span>{favList.length}</span>
    </div>
  );
};

export default FavBadge;
