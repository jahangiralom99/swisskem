import image from "../../assets/quality-banner.jpg";
import image2 from "../../assets/Quality-Assurance.webp";
const Quality = () => {
  return (
    <div>
      <div
        className="h-72 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute section top-1/2 transform left-16 md:left-32">
          <h1 className="text-5xl font-bold text-white">Quality</h1>
        </div>
      </div>
      <div className="section p-5">
        <div className="flex justify-center  items-center min-h-screen bg-white mt-3">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="relative md:w-1/2 w-full p-4">
              <img
                src={image2}
                alt="Quality Assurance"
                className="rounded shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 max-w-xl w-full border-[3px] p-6 bg-white rounded shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                Quality Assurance
              </h2>
              <p className="text-gray-700  leading-relaxed">
                We are equipped with state-of-the-art quality testing
                facilities. Our products undergo stringent quality test right
                from the purchase of the raw material to its final delivery.
                Even the iota of mistake is not possible as our product directly
                deals with lives of the people. Our products are magically
                blended with high quality raw material that revitalizes and
                nourishes your skin and body naturally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
