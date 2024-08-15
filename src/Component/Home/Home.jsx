import { Link } from "react-router-dom";
import "./home.css";

// eslint-disable-next-line react/prop-types
const Home = ({ color }) => {
  return (
    <div className={color ? "home dark_theme" : "home light_theme"} id="home">
      <div className="title">
        <h2>
          <span>Dagim Getaw</span>, a software engineer.
        </h2>
        <p>
          I have over 3 years of extensive experience in web development, with a
          strong understanding and expertise in full-stack web development.{" "}
        </p>
        <div className="link">
          <button>
            <Link to={"/resume"} target="_blank">
              View Resume
            </Link>
          </button>
          <button>
            <Link
              to="https://www.upwork.com/freelancers/~0131ed92dbfad66547"
              target="_blank"
            >
              Hire me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
