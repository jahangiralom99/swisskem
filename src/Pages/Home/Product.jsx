import { Link } from "react-router-dom";
import image1 from "../../assets/product/inthyon Soap.png";
import image2 from "../../assets/product/Inthysun Psd.png";
import image3 from "../../assets/product/Inthyzol luliconazol Cream.png";
import image4 from "../../assets/product/Inthyzol Soap.png";

const Product = () => {
  const products = [
    {
      name: "INTHYON SOAP",
      image: `${image1}`,
      rating: 0,
      route: "/product/details1",
    },
    {
      name: "INTHYSUN Aqua Gel",
      image: `${image2}`,
      rating: 0,
      route: "/product/details2",
    },
    {
      name: "INTHYZOL CREAM",
      image: `${image3}`,
      rating: 0,
      route: "/product/details3",
    },
    {
      name: "INTHYZOL SOAP",
      image: `${image4}`,
      rating: 0,
      route: "/product/details4",
    },
  ];

  return (
    <div className="section">
      <div className="py-10 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-10">
            Our Products
          </h2>
        </div>
        <hr className="my-4 border-blue-300 w-16 mx-auto" />
        <div className="max-w-7xl mt-8 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link
              to={`${product.route}`}
              key={index}
              className="bg-white overflow-hidden"
            >
              <img
                className="w-full object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="text-center mt-6">
                <h3 className="font-semibold text-[#283275] mb-2">
                  {product.name}
                </h3>
                <div className="text-yellow-500 text-xl mb-4">
                  {"⭐".repeat(product.rating) + "☆".repeat(5 - product.rating)}
                </div>
                <button className="bg-[#283275] w-full text-white px-4 py-2 rounded hover:bg-blue-900">
                  READ MORE
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
