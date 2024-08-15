import "./skill.css";

// eslint-disable-next-line react/prop-types
const Skill = ({ color }) => {
  return (
    <div
      className={color ? "skill dark_theme" : "skill light_theme"}
      id="skill"
    >
      <h2>Skills</h2>
      <div className="skill_list">
        <div className="skill_type">
          <p>Front-End</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BootStrap</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>ReactNative</li>
            <li>Material UI</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="skill_type">
          <p>Back-End</p>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Django</li>
            <li>Golang</li>
            <li>python</li>
          </ul>
        </div>
        <div className="skill_type">
          <p>Database</p>
          <ul>
            <li>Mongo DB</li>
            <li>My SQL</li>
          </ul>
        </div>
        <div className="skill_type">
          <p>Others</p>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
