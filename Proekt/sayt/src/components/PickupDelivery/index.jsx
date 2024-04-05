import "./style.css";

function PickupDelivery() {
  return (
    <div className="pickup-delivery-main-div">
      <h3 className="pickup-point-h3">COLLECTION POINT</h3>
      <div className="pickup-delivery-map-div">
        <div className="pickup-delivery-inner-map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1277.945092267677!2d49.85929452499991!3d40.37599119936361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d01b05ddaed%3A0xa76344f47aefa964!2sEmporium%20Port%20Baku!5e0!3m2!1sru!2saz!4v1708977435458!5m2!1sru!2saz"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="pickup-delivery-address-div">
            <h3>Emporium Port Baku</h3>
            <div className="pickup-delivery-inner-address-div">
              <div>
                <h4>Store address</h4>
                <p>
                  153 Neftcilar Ave, AZ1001, Baku,
                  <br /> Azerbaijan
                </p>
              </div>
              <div>
                <h4>Opening hours</h4>
                <p>Monday-Sunday: 10am-10pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pickup-delivery-form">
        <h3>Delivery details</h3>
        <form action="">
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
              <input placeholder="Mobile Number" type="text" />
            </div>
            <div className="checkout-form-flex-div">
              <p>Email</p>
              <input placeholder="Email" type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PickupDelivery;
