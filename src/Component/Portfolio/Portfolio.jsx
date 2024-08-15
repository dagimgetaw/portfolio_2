import "./portfolio.css";
import yt from "../../assets/yt.png";
import dashboard from "../../assets/dashboard.png";
import xo from "../../assets/XO.png";
import hospital from "../../assets/Hospital.png";
import todo from "../../assets/Todo.png";
import restaurant from "../../assets/Resturant.png";
import { useState } from "react";
import { FaSearch, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  { image: yt, alt: "YouTube clone", link: "/youtube-clone" },
  { image: restaurant, alt: "Restaurant website", link: "/restaurant-website" },
  { image: dashboard, alt: "Admin dashboard", link: "/admin-dashboard" },
  { image: hospital, alt: "Hospital website", link: "/hospital-website" },
  { image: xo, alt: "XO game", link: "/xo-game" },
  { image: todo, alt: "Todo list website", link: "/todo-list" },
];

// eslint-disable-next-line react/prop-types
const Portfolio = ({ color }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleHoverEnter = (index) => {
    setHoverIndex(index);
  };

  const handleHoverLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <div
      className={color ? "portfolio dark_theme" : "portfolio light_theme"}
      id="project"
    >
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="project_list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="box"
            onMouseEnter={() => handleHoverEnter(index)}
            onMouseLeave={handleHoverLeave}
          >
            {hoverIndex === index && (
              <div className="project_links">
                <Link to={project.link} className="project_link_first">
                  <FaSearch />
                </Link>
                <Link to={project.link} className="project_link_second">
                  <FaLink />
                </Link>
              </div>
            )}
            <Link to={project.link}>
              <img src={project.image} alt={project.alt} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
