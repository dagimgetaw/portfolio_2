import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
          <h1>
            <Link to={"/"}>dagimgetaw</Link>
          </h1>
        </div>
        <div className="nav_item">
          <ul>
            <li>
              <Link to={"/#home"}>Home</Link>
            </li>
            <li>
              <Link to={"/#service"}>Service</Link>
            </li>
            <li>
              <Link to={"/#skill"}>Skill</Link>
            </li>
            <li>
              <Link to={"/#project"}>Project</Link>
            </li>
            <li>
              <Link to={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav_toggle" onClick={handleToggle}>
          {toggle ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      {toggle ? (
        ""
      ) : (
        <div className="nav_item_toggle">
          <ul>
            <li>
              <Link to={"/#home"}>Home</Link>
            </li>
            <li>
              <Link to={"/#service"}>Service</Link>
            </li>
            <li>
              <Link to={"/#skill"}>Skill</Link>
            </li>
            <li>
              <Link to={"/#project"}>Project</Link>
            </li>
            <li>
              <Link to={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
