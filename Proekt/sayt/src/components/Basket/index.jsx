import { useSelector } from "react-redux";
import "./style.css";
import { useState } from "react";
import { removeFromCart } from "../../Redux/Actions/cart.actions";
import { useDispatch } from "react-redux";
import { IoBagOutline } from "react-icons/io5";
import BasketBadge from "./basket.counter";
import { IoBagHandleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function Basket() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const { cartList } = useSelector((state) => state);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const calculateTotal = () => {
    return cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };


  return (
    <div className="basket-div-main">
      <div className="nav-icon-div">
        <IoBagOutline onClick={toggleBasket} className="header-icon" />
        {cartList.length > 0 ? <BasketBadge /> : ""}
      </div>

      {isBasketOpen && (
        <div className="basket-sidebar">
          <div className="basket-header">
            <h2>Shopping bag</h2>
            <span onClick={toggleBasket}>&times;</span>
          </div>
          {cartList.length ? (
            <div className="basket-body-div">
              {cartList.map((item) => (
                <div key={item.id} className="basket-product-div">
                  <img
                    className="basket-main-img"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="basket-info-div">
                    <h3 className="basket-main-brand">{item.brand}</h3>
                    <p className="basket-main-name">{item.name}</p>
                    <p className="basket-main-size">SIZE: {item.size}</p>
                    <p className="basket-main-size">QTY: {item.quantity}</p>
                    <p className="basket-main-price">{item.price} AZN</p>
                    <button
                      onClick={ () => {
                        dispatch(removeFromCart(item.id))
                        toast.error("Product removed from cart!")}
                      }
                      className="delet-basket-item"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {cartList.length ? (
            <div className="basket-footer">
              <p className="basket-price-footer">
                TOTAL PRICE <span> {calculateTotal()} AZN</span>
              </p>
              <p className="basket-price-footer">
                Delivery
                <span>
                  {calculateTotal() > 200? "FREE":"10 AZN"}
                </span>
              </p>
              <button onClick={()=> {
                navigate("/basketcart")
                setIsBasketOpen(false)
            }} className="go-to-cart-btn">GO TO CART</button>
              <button onClick={toggleBasket} className="continue-btn">
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="empty-basket">
              <IoBagHandleOutline className="empty-icon-bag" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Basket;
