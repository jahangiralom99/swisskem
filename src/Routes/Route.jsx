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
import ProductDetails1 from "../Components/ProductDetails/ProductDetails1";
import ProductDetails2 from "../Components/ProductDetails/ProductDetails2";
import ProductDetails3 from "../Components/ProductDetails/ProductDetails3";
import ProductDetails4 from "../Components/ProductDetails/ProductDetails4";
import ProductDetails5 from "../Components/ProductDetails/ProductDetails5";
import ProductDetails6 from "../Components/ProductDetails/ProductDetails6";
import ProductDetails7 from "../Components/ProductDetails/ProductDetails7";

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
        path: "/product/details1",
        element: <ProductDetails1 />,
      },
      {
        path: "/product/details2",
        element: <ProductDetails2 />,
      },
      {
        path: "/product/details3",
        element: <ProductDetails3 />,
      },
      {
        path: "/product/details4",
        element: <ProductDetails4 />,
      },
      {
        path: "/product/details5",
        element: <ProductDetails5 />,
      },
      {
        path: "/product/details6",
        element: <ProductDetails6 />,
      },
      {
        path: "/product/details7",
        element: <ProductDetails7 />,
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
