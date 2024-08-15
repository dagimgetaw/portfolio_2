import { Link } from "react-router-dom";
import Navbar from "../../Component/NavBar/Navbar";
import Links from "../../Component/Link/Links";
import "./notfound.css";

// eslint-disable-next-line react/prop-types
const NotFound = ({ color, setColor }) => {
  return (
    <>
      <Navbar />
      <Links color={color} setColor={setColor} />
      <div className={color ? "notfound dark_theme" : "notfound light_theme"}>
        <h2>404</h2>
        <p>Page not found</p>
        <button>
          <Link to={"/"} className="go_to_home">
            HomePage
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
