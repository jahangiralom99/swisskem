import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Quality from "../Pages/Quality/Quality";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllProducts from "../Pages/AllProducts/AllProducts";
import OurOfficial from "../Pages/OurOfficial/OurOfficial";
import OurActivity from "../Pages/OurActivity/OurActivity";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-product",
        element: <AllProducts />,
      },
      {
        path: "/quality",
        element: <Quality />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/our-official",
        element: <OurOfficial />,
      },
      {
        path: "/our-activity",
        element: <OurActivity />,
      },
    ],
  },
]);

export default Route;
