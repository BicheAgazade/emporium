import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { addToCartAction } from "../../Redux/Actions/cart.actions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavAction, removeFromFav } from "../../Redux/Actions/fav.actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import QuickView from "../QuickView";
import { useCategory } from "../../CategoryContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ item }) {
  const dispatch = useDispatch();
  const { favList } = useSelector((state) => state);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const navigate = useNavigate();
  const { scrollToTop } = useCategory();

  useEffect(() => {
    const isItemInFavList = favList.some((favItem) => favItem.id === item.id);
    setIsFavorited(isItemInFavList);
  }, [favList, item.id]);

  const handleAddToFav = () => {
    dispatch(addToFavAction(item));
    toast.success("Product successfully added to favlist!");
    setIsFavorited(true);
  };

  const handleOpenQuickView = () => {
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCartAction(item));
    toast.success("Product successfully added to cart!");
  };

  return (
    <div key={item.id} className="product-main-div">
      <img
        onClick={() => {
          scrollToTop();
          navigate(`/details/${item.id}`);
        }}
        className="product-main-img"
        src={item.img}
        alt={item.name}
      />
      {isFavorited ? (
        <FaHeart
          onClick={() => {
            dispatch(removeFromFav(item));
            toast.error("Product removed from favlist!");
          }}
          className="heart-product-icon favorited"
        />
      ) : (
        <FaRegHeart onClick={handleAddToFav} className="heart-product-icon" />
      )}
      <h3 className="product-main-brand">{item.brand}</h3>
      <p className="product-main-name">{item.name}</p>
      <p className="product-main-price">{item.price} AZN</p>
      <div className="product-btn-div">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <button className="add-to-cart-btn" onClick={handleOpenQuickView}>
          QUICK VIEW
        </button>
      </div>
      {isQuickViewOpen && (
        <QuickView
          item={item}
          onClose={handleCloseQuickView}
          fav={handleAddToFav}
          isFavorited={isFavorited}
        />
      )}
    </div>
  );
}

export default Product;
