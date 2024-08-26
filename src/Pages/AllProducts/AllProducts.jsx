import { Link } from "react-router-dom";
import image1 from "../../assets/product/Inthyglow Cream.png";
import image2 from "../../assets/product/INTHYGLOW Psd.png";
import image3 from "../../assets/product/inthyon Soap.png";
import image4 from "../../assets/product/Inthyzol Shampoo.png";
import image5 from "../../assets/product/Inthyzol Soap.png";
import image6 from "../../assets/product/Inthysun Psd.png";
import image7 from "../../assets/product/Inthyzol luliconazol Cream.png";

const AllProducts = () => {
  return (
    <div className="section mx-auto mt-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-8 place-content-center gap-6 mb-12">
        <Link
          to="/product/details1"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image3} alt="INTHYON SOAP" />
          <p className="font-bold mt-4">INTHYON SOAP</p>
          <p className="mt-3">Skin lightning & Brightening Soap</p>
        </Link>
        <Link
          to="/product/details2"
          className="text-center md:w-96 border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image6} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">INTHYSUN Aqua Gel</p>
          <p className="mt-3">
            Unique New Generation Most Efficient Photostable Sunscreen{" "}
          </p>
        </Link>
        <Link
          to="/product/details3"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image7} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">INTHYZOL CREAM</p>
          <p className="mt-3">Skin lightning & Brightening Soap</p>
        </Link>
        <Link
          to="/product/details4"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image5} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">INTHYZOL SOAP</p>
          <p className="mt-3">Antibacterial & Antifungal Soap</p>
        </Link>
        <Link
          to="/product/details5"
          className="text-center  border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image4} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">INTHYZOL SHAMPOO</p>
          <p className="mt-3">Anti-Dandruff Treatment</p>
        </Link>
        <Link
          to="/product/details6"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="md:w-72 inline" src={image1} alt="INTHYGLOW CREAM" />
          <p className="font-bold mt-4">INTHYGLOW CREAM</p>
          <p className="mt-3">Skin Glowing lightning & whitening Cream</p>
        </Link>
        <Link
          to="/product/details7"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img
            className="md:w-72 inline"
            src={image2}
            alt="INTHYGLOW FACEWASH"
          />
          <p className="font-bold mt-4">INTHYGLOW FACEWASH</p>
          <p className="mt-3">Skin lightning & whitening Facewash</p>
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
