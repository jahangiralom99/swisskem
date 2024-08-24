import image from "../../assets/products-bg.webp";

const ProductRang = () => {
  return (
    <div className="mt-8">
      <div className=" bg-white ">
        {/* Left side background image */}
        <div
          className="w-full h-[600px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="w-full absolute md:right-36 h-full md:w-[50%] lg:w-[40%] p-6 section lg:pt-32 bg-white">
            <h2 className="text-3xl text-start font-semibold text-blue-800 mb-4">
              Product Range
            </h2>
            <hr className="my-4 border-blue-300 w-16 lg:mx-0" />
            <p className="text-gray-600 mb-4 leading-8">
              Our medicated skin, health, and hair care products are formulated
              with extensive care to provide and rebuild defense of skin from
              inside. Products that we offer hydrate, moisturize, revive, and
              tone the skin and provide complete hair care regimen in the most
              natural form. As formulators of these healthcare products, we take
              care of the compositions of these products.
            </p>
            <p className="text-gray-600 leading-8">
              Our broad range of product lines includes Medicated Soaps, Dermal
              Care Topical Products, Sunscreens, Anti-stretch Mark Creams, Skin
              Care Lotions, Shampoos, Glycolic Acids, Permethrin Lotions,
              Permethrin Soaps, Calamine Suspensions, Calamine Emulsions, Oils,
              and many other products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRang;
