import "./portfolio.css";
import yt1 from "../../assets/yt.png";
import yt2 from "../../assets/yt2.png";
import dashboard from "../../assets/dashboard.png";
import dashboard2 from "../../assets/dashboard2.png";
import embrace1 from "../../assets/embrace.png";
import embrace2 from "../../assets/embrace2.png";
import plogging1 from "../../assets/plogging1.png";
import plogging2 from "../../assets/plogging2.png";
import hospital1 from "../../assets/Hospital.png";
import hospital2 from "../../assets/hospital2.png";
import restaurant1 from "../../assets/Resturant.png";
import restaurant2 from "../../assets/resturant2.png";
import { useState, useEffect } from "react";
import { FaEye, FaLink, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const projects = [
  {
    image: yt1,
    alt: "YouTube clone",
    link: "https://github.com/dagimgetaw/youtube_clone",
    image2: yt2,
  },
  {
    image: plogging1,
    alt: "Plogging Ethiopia",
    link: "https://ploggingethiopia.org/",
    image2: plogging2,
  },
  {
    image: embrace1,
    alt: "Embrace Event",
    link: "https://embracevents.com/",
    image2: embrace2,
  },
  {
    image: restaurant1,
    alt: "Restaurant website",
    link: "https://github.com/dagimgetaw/Responsive-Restaurant-Website",
    image2: restaurant2,
  },
  {
    image: dashboard,
    alt: "Admin dashboard",
    link: "https://github.com/dagimgetaw/Responsive-Admin-Dashboard",
    image2: dashboard2,
  },
  {
    image: hospital1,
    alt: "Hospital website",
    link: "https://github.com/dagimgetaw/Responsive-Hospital-Website",
    image2: hospital2,
  },
];

// Custom styles for the modal
const customStyles = {
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    border: "none",
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    zIndex: 1000,
  },
};

// eslint-disable-next-line react/prop-types
const Portfolio = ({ color }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleHoverEnter = (index) => {
    setHoverIndex(index);
  };

  const handleHoverLeave = () => {
    setHoverIndex(-1);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
    document.body.style.overflowY = "hidden"; // Hide vertical scroll
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflowY = "auto"; // Restore vertical scroll
  };

  useEffect(() => {
    // Ensure overflow is restored when component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className={color ? "portfolio dark_theme" : "portfolio light_theme"}
      id="project"
    >
      <h2>Projects</h2>
      <p>
        Showcasing a diverse range of responsive web projects I built and
        contributed to, demonstrating my versatile web development skills.
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
                <button
                  className="project_link_first"
                  onClick={() => openModal(project.image2)}
                >
                  <FaEye className="search_code" />
                </button>
                <Link
                  className="project_link_second"
                  to={project.link}
                  target="_blank"
                >
                  <FaLink className="search_code" />
                </Link>
              </div>
            )}
            <img src={project.image} alt={project.alt} />
          </div>
        ))}
      </div>

      {/* Modal for Image Pop-up */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Image"
        ariaHideApp={false} // Needed for screen readers
      >
        <button onClick={closeModal} className="close_button">
          <FaTimes className={"white_close "} />
        </button>
        {currentImage && (
          <img src={currentImage} alt="Project" className="full_screen_img" />
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
