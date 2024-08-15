import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserAlt,
  FaPen,
} from "react-icons/fa";
import "./contact.css";

// eslint-disable-next-line react/prop-types
const Contact = ({ color }) => {
  return (
    <div
      className={color ? "contact dark_theme" : "contact light_theme"}
      id="contact"
    >
      <div className="contact_page">
        <h2>CONTACT WITH ME.</h2>
        <div className="contact_tag">
          <FaEnvelope className="contact_link" />
          <p>dagimgetaw27@gmail.com</p>
        </div>
        <div className="contact_tag">
          <FaPhone className="contact_link" />
          <p>+251-905429602</p>
        </div>
        <div className="contact_tag">
          <FaMapMarkerAlt className="contact_link" />
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className="contact_form">
        <div className="box">
          <FaUserAlt className="link" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="box">
          <FaEnvelope className="link" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="box">
          <FaPen className="link2" />
          {/* <input type="text" placeholder="Message" /> */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
