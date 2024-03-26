import axios from "axios";
import { useCategory } from "../../CategoryContext";
import FooterHeader from "../../components/FooterHeader";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    applicationType: "",
    fullname: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const { infoTitle } = useCategory();
  const foundTitle = infoTitle.find((item) => item.category === "contacts");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.applicationType ||
      !formData.message
    ) {
      alert("Fill in all the fields");
      return;
    }
    if (formData.mobileNumber.length !== 9) {
      alert("Mobile number should consist of 9 digits");
      return;
    }

    try {
      await axios.post("http://localhost:3000/contacts", formData);
      alert("Form data submitted successfully");
    } catch (error) {
      console.error(error.message);
    }

    setFormData({
      applicationType: "",
      fullname: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <FooterHeader infoTitle={foundTitle} />
      <div className="footer-contact-div">
        <h2 className="footer-contact-h2">Contact us</h2>
        <hr className="contact-hr" />
        <div className="footer-contact-info-div">
          <table className="footer-contact-table-div">
            <tr>
              <td>
                Questions and requests related to Emporium.az e-commerce sales
                for:
              </td>
              <td>
                Every day: <p>10:00 - 19:00</p>
              </td>
              <td>+994 55 555-55-55</td>
            </tr>
            <tr>
              <td>
                For questions, suggestions and requests related to the loyalty
                program:
              </td>
              <td>
                Monday-Friday:<p>09:00 - 18:00</p>
              </td>
              <td> +994 55 444-44-44 customercare@sinteks.com</td>
            </tr>
          </table>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://img.myloview.com/posters/hello-word-cloud-in-different-languages-of-the-world-concept-background-700-199953369.jpg"
            className="contact-icon-div"
          >
            <FaWhatsapp className="contact-icon-img" />
            <p className="contact-icon-p">Send us a message</p>
          </a>
        </div>
        <h2>Contact form</h2>
        <hr className="contact-hr" />
        <div>
          <form
            className="contact-form"
            name="contactForm"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="contact-form-div">
              <p>Application type</p>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
              >
                <option hidden>Select application type</option>
                <option>Information</option>
                <option>Delivery</option>
                <option>Orders</option>
                <option>Payment</option>
                <option>Loyalty</option>
              </select>
            </div>
            <div className="contact-form-div">
              <p>Fullname</p>
              <input
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                type="text"
                placeholder="Fullname"
              />
            </div>
            <div className="contact-email-number-div">
              <div className="contact-form-div-email">
                <p>Email</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="contact-form-div-email">
                <p>Mobile number</p>
                <input
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  type="number"
                  placeholder="Mobile number"
                />
              </div>
            </div>
            <div className="contact-form-div">
              <p>Message</p>
              <textarea
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input className="send-input" value="SEND" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
