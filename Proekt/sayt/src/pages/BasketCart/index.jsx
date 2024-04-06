import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router";
import { removeFromCart } from "../../Redux/Actions/cart.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCategory } from "../../CategoryContext";

function BasketCart() {
  const { cartList } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
     const { scrollToTop } = useCategory();
  const calculateTotal = () => {
    return cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      {cartList.length ? (
        <div className="shop-bag-main-div">
          <div className="shop-bag-title-div">
            <h2>Shopping bag</h2>
            <p>{cartList.length} items</p>
          </div>
          <div className="shop-bag-inner-div">
            <div className="shop-bag-product-div">
              {cartList.map((item) => (
                <div key={item.id} className="shop-bag-product-inner-div">
                  <img
                    onClick={() => navigate(`/details/${item.id}`)}
                    className="shop-bag-product-img"
                    src={item.img}
                    alt=""
                  />
                  <div className="shop-bag-info-div">
                    <div>
                      <h3>{item.brand}</h3>
                      <p className="shop-bag-name">{item.name}</p>
                      <p className="shop-bag-size">SIZE: {item.size}</p>
                      <p className="shop-bag-size">QTY: {item.quantity}</p>
                      <p className="shop-bag-price">{item.price} AZN</p>
                    </div>
                    <span
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                        toast.error("Product removed from cart!");
                      }}
                      className="shop-bag-delete-span"
                    >
                      &times;
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="shop-bag-order-total-div">
              <h3>Order summary</h3>
              <div className="order-total-div">
                <span>ITEMS TOTAL </span>
                <span>{calculateTotal()} AZN</span>
              </div>
              <div className="order-total-div">
                <span>DELIVERY</span>
                <span> {calculateTotal() > 200 ? "FREE" : "10 AZN"}</span>
              </div>
              <div className="order-subtotal-div">
                <span>SUBTOTAL </span>
                <span>
                  {calculateTotal() > 200
                    ? calculateTotal()
                    : calculateTotal() + 10}{" "}
                  AZN
                </span>
              </div>
              <button
                onClick={() => {navigate("/checkout")
                scrollToTop()
              }}
                className="shop-bag-checkout-btn"
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-div">
          <h2>Shopping bag</h2>
          <div className="empty-basket">
            <IoBagHandleOutline className="empty-icon-bag" />
            <p>Your cart is empty</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BasketCart;
