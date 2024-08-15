import resume from "../../assets/resume.pdf";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <iframe
        title="Resume"
        src={resume}
        frameBorder="0"
        width="100%"
        height="800"
        className="first"
        style={{
          overflow: "hidden",
          height: "100vh",
        }}
      ></iframe>
    </div>
  );
};

export default Resume;
