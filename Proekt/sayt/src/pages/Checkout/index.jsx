import "./style.css";

function Checkout() {
  return (
    <div className="checkout-main-div">
      <div className="checkout-delivery-main-div">
        <div className="checkout-delivery-methods">
          <h3>Select delivery methods </h3>
          <div className="checkout-delivery-btn-div">
            <button className="delivery-btn">Delivery</button>
            <button className="pickup-btn">Pickup from the store</button>
          </div>
        </div>
        <div className="checkout-delivery-input-div">
          <div className="checkout-delivery-redio-div">
            <input name="options" value="option1" type="radio" />
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
            <input name="options" value="option2" type="radio" />
            <div>
              <h4>URGENT DELIVERY</h4>
              <p>Order will now be prepared and sent you</p>
            </div>
          </div>
          <span>15 AZN</span>
        </div>
        <div className="checkout-form-div">
          <form className="checkout-form" action="">
            <div className="checkout-form-name-div">
              <div>
                <label htmlFor="">First Name</label>
                <input placeholder="First Name" type="text" />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input placeholder="Last Name" type="text" />
              </div>
            </div>
            <div className="checkout-form-name-div">
              <div>
                <label htmlFor="">Mobile Number</label>
                <input placeholder="Mobile Number" type="number" />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input placeholder="Email" type="email" />
              </div>
            </div>
            <div className="checkout-form-select-div">
              <p>City</p>
              <select>
                <option>Other</option>
                <option>Baku</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Address</label>
              <input placeholder="Address" type="text" />
            </div>
          </form>

          <div>
            <div className="checkout-gift-options-div">
              <h2>Gifting options</h2>
              <p>
                Please make sure the delivery address belongs to the one
                receiving the gift
              </p>
              <div className="checkbox-div">
                <input type="checkbox" />
                <p>SEND THIS ORDER AS A GIFT</p>
              </div>
            </div>

            <form className="checkout-form" action="">
              <div className="checkout-form-name-div">
                <div>
                  <label htmlFor="">Receiver First Name</label>
                  <input placeholder="Receiver First Name" type="text" />
                </div>
                <div>
                  <label htmlFor="">Receiver Last Name</label>
                  <input placeholder="Receiver Last Name" type="text" />
                </div>
              </div>
              <div>
                <label htmlFor="">Receiver Mobile</label>
                <input placeholder="Receiver Mobile" type="number" />
              </div>
              <div className="checkout-form-textarea-div">
                <p>Note</p>
                <textarea placeholder="Note" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>
          <input
            className="checkout-submit-input"
            value="Complete Order"
            type="submit"
          />
          <button className="back-to-shop-btn">BACK TO SHOPPING CART</button>
        </div>
      </div>

      <div className="checkout-product-div"></div>
    </div>
  );
}
export default Checkout;
