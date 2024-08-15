import "./link.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaTelegramPlane,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Links = ({ color, setColor }) => {
  const handleClick = () => {
    setColor(!color);
  };

  return (
    <div className="link">
      <div className="social">
        <Link to={"https://www.linkedin.com/in/dagimgetaw/"} target="_blank">
          <FaLinkedin
            className={color ? "social_media black" : "social_media light"}
          />
        </Link>
        <Link to={"https://github.com/dagimgetaw"} target="_blank">
          <FaGithub
            className={color ? "social_media black" : "social_media light"}
          />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=61563046480092"}
          target="_blank"
        >
          <FaFacebookF
            className={color ? "social_media black" : "social_media light"}
          />
        </Link>
        <Link to={"tg://resolve?domain=dagim1122"} target="_blank">
          <FaTelegramPlane
            className={color ? "social_media black" : "social_media light"}
          />
        </Link>
      </div>
      <div className="color">
        {color ? (
          <FaMoon className="icon dark_theme" onClick={handleClick} />
        ) : (
          <FaSun className="icon light_theme" onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Links;
