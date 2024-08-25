import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Quality from "../Pages/Quality/Quality";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllProducts from "../Pages/AllProducts/AllProducts";
import OurOfficial from "../Pages/OurOfficial/OurOfficial";
import OurActivity from "../Pages/OurActivity/OurActivity";
import Live from "../Pages/Live/Live";
import DocumentPage from "../Pages/DocumentPage/DocumentPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-product",
        element: <AllProducts />,
      },
      {
        path: "/product/detail",
        element: <ProductDetails />,
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
      {
        path: "/live",
        element: <Live />,
      },
      {
        path: "/document",
        element: <DocumentPage />,
      },
    ],
  },
]);

export default Route;
