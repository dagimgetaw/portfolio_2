import Navbar from "../Component/NavBar/Navbar";
import Home from "../Component/Home/Home";
import Service from "../Component/Service/Service";
import Skill from "../Component/Skills/Skill";
import Portfolio from "../Component/Portfolio/Portfolio";
import Contact from "../Component/Contact/Contact";
import Links from "../Component/Link/Links";

// eslint-disable-next-line react/prop-types
const HomePage = ({ color, setColor }) => {
  // const [color, setColor] = useState(false);
  return (
    <>
      <Navbar color={color} />
      <Links color={color} setColor={setColor} />
      <Home color={color} />
      <Service color={color} />
      <Skill color={color} />
      <Portfolio color={color} />
      <Contact color={color} />
    </>
  );
};

export default HomePage;
