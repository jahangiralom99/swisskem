import img1 from "../../assets/37.webp";
import img2 from "../../assets/76.webp";
import img3 from "../../assets/113-1.webp";
import img4 from "../../assets/64.webp";

const Product = () => {
  const products = [
    {
      name: "Glytop-12 Lotion",
      image: `${img1}`,
      rating: 0,
    },
    {
      name: "Glytop-6 Lotion",
      image: `${img2}`,
      rating: 0,
    },
    {
      name: "Humid Skin Cream",
      image: `${img3}`,
      rating: 0,
    },
    {
      name: "Medi-Plus Instant Hand Sanitizer",
      image: `${img4}`,
      rating: 0,
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
        <div className="max-w-7xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
