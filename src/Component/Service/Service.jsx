import "./service.css";
import { FaGlobe, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Service = ({ color }) => {
  return (
    <div className={color ? "service dark_theme" : "service light_theme"}>
      <div className="service_form">
        <h2>WHAT I CAN DO FOR YOU?</h2>
        <p>
          I have over 3 years of extensive experience in web development, with a
          strong understanding and expertise in full-stack web development.{" "}
        </p>
      </div>
      <div className="service_container">
        <div className="box">
          <FaGlobe className="icon" />
          <p className="service_title">
            <span>WEB DESIGN</span>
          </p>
          <p className="service_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit
          </p>
        </div>
        <div className="box">
          <FaMobileAlt className="icon" />
          <p className="service_title">
            <span>APP DEVELOPMENT</span>
          </p>
          <p className="service_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit
          </p>
        </div>
        <div className="box">
          <FaChalkboardTeacher className="icon" />
          <p className="service_title">
            <span>TRAINER</span>
          </p>
          <p className="service_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
            adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
