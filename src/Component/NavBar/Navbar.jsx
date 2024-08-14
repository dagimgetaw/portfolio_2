import { useState } from "react";
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
            <a href="">dagimgetaw</a>
          </h1>
        </div>
        <div className="nav_item">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
