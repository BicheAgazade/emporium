import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import PickupDelivery from "../../components/PickupDelivery";

function Checkout() {
  const { cartList } = useSelector((state) => state);
  const navigate = useNavigate();
  const [checkboxOpen, setCheckboxOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [city, setCity] = useState("Other");
  const [pickupSelected, setPickupSelected] = useState(true);

  const calculateTotal = () => {
    let total = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total;
  };
  const calcUrgentDelivery = () => {
    return city === "Baku" ? 15 : 25;
  };
  const DeliveryChange = (e) => {
    setDeliveryMethod(e.target.value);
  };
  const CheckboxChange = () => {
    setCheckboxOpen(!checkboxOpen);
  };
  const CityChange = (e) => {
    setCity(e.target.value);
  };
  const TotalDelivery = () => {
    if (deliveryMethod == "standard") {
      if (calculateTotal() > 200) {
        return "FREE";
      } else {
        return "10 AZN";
      }
    } else if (deliveryMethod == "urgent") {
      return city === "Baku" ? "15 AZN" : "25 AZN";
    }
  };

  const SubTotalDelivery = () => {
    if (deliveryMethod == "standard") {
      if (calculateTotal() < 200) {
        return calculateTotal() + 10;
      } else {
        return calculateTotal();
      }
    } else if (deliveryMethod == "urgent") {
      return calculateTotal() + calcUrgentDelivery();
    }
  };
  return (
    <div className="checkout-main-div">
      <div className="checkout-delivery-main-div">
        <div className="checkout-delivery-methods">
          <h3>Select delivery methods </h3>
          <div className="checkout-delivery-btn-div">
            <button
              className={`delivery-btn ${pickupSelected ? "selected" : ""}`}
              onClick={() => setPickupSelected(true)}
            >
              Delivery
            </button>
            <button
              className={`pickup-btn ${pickupSelected ? "" : "selected"}`}
              onClick={() => setPickupSelected(false)}
            >
              Pickup from the store
            </button>
          </div>
        </div>

        {pickupSelected ? (
          <>
            <div className="checkout-delivery-input-div">
              <div className="checkout-delivery-redio-div">
                <input
                  onChange={DeliveryChange}
                  name="options"
                  value="standard"
                  type="radio"
                />
                <div>
                  <h4>STANDARD DELIVERY</h4>
                  <p>
                    Orders before 16:00 will be delivered on the same day.
                    <br /> After 16:00 will be delivered on next day.
                  </p>
                </div>
              </div>
              <span>FREE</span>
            </div>
            <div className="checkout-delivery-input-div">
              <div className="checkout-delivery-redio-div">
                <input
                  onChange={DeliveryChange}
                  name="options"
                  value="urgent"
                  type="radio"
                />
                <div>
                  <h4>URGENT DELIVERY</h4>
                  <p>Order will now be prepared and sent you</p>
                </div>
              </div>
              <span>{calcUrgentDelivery()} AZN</span>
            </div>
            <div className="checkout-form-div">
              <h3>Delivery details</h3>
              
              <form className="checkout-form" action="">
                <div className="checkout-form-name-div">
                  <div className="checkout-form-flex-div">
                    <p>First Name</p>
                    <input placeholder="First Name" type="text" />
                  </div>
                  <div className="checkout-form-flex-div">
                    <p>Last Name</p>
                    <input placeholder="Last Name" type="text" />
                  </div>
                </div>
                <div className="checkout-form-name-div">
                  <div className="checkout-form-flex-div">
                    <p>Mobile Number</p>
                    <input placeholder="Mobile Number" type="number" />
                  </div>
                  <div className="checkout-form-flex-div">
                    <p>Email Address</p>
                    <input placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="checkout-form-select-div">
                  <p>City</p>
                  <select onChange={CityChange}>
                    <option>Other</option>
                    <option>Baku</option>
                  </select>
                  <p>Address</p>
                  <input placeholder="Address" type="text" />
                </div>
              </form>

              <div className="checkout-gift-main-div">
                <div className="checkout-gift-options-div">
                  <h3>Gifting options</h3>
                  <p>
                    Please make sure the delivery address belongs to the one
                    receiving the gift
                  </p>
                  <div className="checkbox-div">
                    <input onChange={CheckboxChange} type="checkbox" />
                    <span>SEND THIS ORDER AS A GIFT</span>
                  </div>
                </div>

                {checkboxOpen ? (
                  <form className="checkout-form" action="">
                    <div className="checkout-form-name-div">
                      <div className="checkout-form-flex-div">
                        <p>Receiver First Name</p>
                        <input placeholder="Receiver First Name" type="text" />
                      </div>
                      <div className="checkout-form-flex-div">
                        <p>Receiver Last Name</p>
                        <input placeholder="Receiver Last Name" type="text" />
                      </div>
                    </div>
                    <div className="checkout-form-select-div">
                      <p>Receiver Mobile</p>
                      <input placeholder="Receiver Mobile" type="number" />
                    </div>
                    <div className="checkout-form-textarea-div">
                      <p>Note</p>
                      <textarea
                        placeholder="Note"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </form>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
         <PickupDelivery/>
        )}

        <input
          className="checkout-submit-input"
          value="Complete Order"
          type="submit"
        />
        <button className="back-to-shop-btn">BACK TO SHOPPING CART</button>
      </div>

      <div className="checkout-product-main-div">
        <h2>Order summary</h2>
        <div className="checkout-product-inner-div">
          <div className="checkout-product-div">
            {cartList.map((item) => (
              <div key={item.id} className="checkout-product-map-div">
                <img
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="checkout-product-img"
                  src={item.img}
                  alt=""
                />
                <div className="checkout-product-info-div">
                  <div>
                    <h3>{item.brand}</h3>
                    <p className="checkout-product-name">{item.name}</p>
                    <p className="checkout-product-size">SIZE: {item.size}</p>
                    <p className="checkout-product-size">
                      QTY: {item.quantity}
                    </p>
                    <p className="checkout-product-price">{item.price} AZN</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-order-total-div">
            <div className="checkout-order-div">
              <span>ITEMS TOTAL </span>
              <span>{calculateTotal()} AZN</span>
            </div>
            <div className="checkout-order-div">
              <span>DELIVERY</span>
              <span> {TotalDelivery()}</span>
            </div>
            <div className="checkout-order-div subtotal">
              <span>SUBTOTAL </span>
              <span> {SubTotalDelivery()} AZN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
