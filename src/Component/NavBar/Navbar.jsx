import { useState } from "react";
import { Link } from "react-scroll";
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
            <Link
              to={"home"}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              dagimgetaw
            </Link>
          </h1>
        </div>
        <div className="nav_item">
          <ul>
            <li>
              <Link
                to={"home"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"service"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to={"skill"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to={"project"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to={"contact"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
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
              <Link
                to={"home"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"service"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to={"skill"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to={"project"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to={"contact"}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
