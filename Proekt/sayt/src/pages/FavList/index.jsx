import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import "./style.css";
import { addToCartAction } from "../../Redux/Actions/cart.actions";
import { removeFromFav } from "../../Redux/Actions/fav.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FavList() {
  const { favList } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="fav-main-div">
      <div className="fav-inner-div">
        <h2>Wishlist</h2>
        {favList.length > 0 ? <p>{favList.length} items</p> : ""}
      </div>
      <div className="fav-product">
        {favList.length > 0 ? (
          favList.map((item) => (
            <div key={item.id} className="fav-product-div">
              <img className="fav-main-img" src={item.img} alt={item.name} />
              <span onClick={()=>{ dispatch(removeFromFav(item))
                toast.error("Product removed from favlist!")}} className="delete-fav">&times;</span>
              <h3 className="fav-main-brand">{item.brand}</h3>
              <p className="fav-main-name">{item.name}</p>
              <p className="fav-main-price">{item.price} AZN</p>
              <button
                className="add-to-cart"
                onClick={() => {dispatch(addToCartAction(item))
                 toast.success("Product successfully added to cart!");
                }}
              >
                ADD TO CART
              </button>
            </div>
          ))
        ) : (
          <div className="wishlist-div">
            <FaRegHeart className="icon-wishlist" />
            <p className="wishlist-p">Your wishlist is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavList;
