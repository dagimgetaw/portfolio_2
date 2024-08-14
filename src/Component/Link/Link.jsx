import "./link.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaMoon,
  FaSun,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Link = ({ color, setColor }) => {
  const handleClick = () => {
    setColor(!color);
  };

  return (
    <div className="link">
      <div className="social">
        <FaLinkedin
          className={color ? "social_media black" : "social_media light"}
        />
        <FaGithub
          className={color ? "social_media black" : "social_media light"}
        />
        <FaFacebookF
          className={color ? "social_media black" : "social_media light"}
        />
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

export default Link;
