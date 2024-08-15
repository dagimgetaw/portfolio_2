import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import Mainlayout from "./Layout/Mainlayout";
import NotFound from "./Pages/404/NotFound";
import Resume from "./Pages/Resume/Resume";

const App = () => {
  const [color, setColor] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
      // path="/"
      // element={<Mainlayout color={color} setColor={setColor} />}
      >
        <Route index element={<HomePage color={color} setColor={setColor} />} />
        <Route
          path="*"
          element={<NotFound color={color} setColor={setColor} />}
        />
        <Route path="/resume" element={<Resume />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
