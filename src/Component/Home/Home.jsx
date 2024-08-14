import "./home.css";

// eslint-disable-next-line react/prop-types
const Home = ({ color }) => {
  return (
    <div className={color ? "home dark_theme" : "home light_theme"}>
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
            <a href="">View Resume</a>
          </button>
          <button>
            <a href="">Hire me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
