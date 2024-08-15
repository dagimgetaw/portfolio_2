import Navbar from "../Component/NavBar/Navbar";
import Links from "../Component/Link/Links";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Mainlayout = ({ color, setColor }) => {
  return (
    <div>
      <Navbar />
      <Links color={color} setColor={setColor} />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
