import { Link } from "react-router-dom";
import image from "../../assets/2-1.png";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = () => {
  return (
    <div className="section">
      <Link
        to="/product/detail"
        className="flex flex-col md:flex-row md:items-start md:space-x-8 bg-white mt-12"
      >
        <div className="md:flex-1">
          <ReactImageMagnify
            enlargedImagePosition="over"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 600,
              },
              enlargedImageContainerDimensions: {
                width: 400,
                height: 100,
              },
              enlargedImageContainerStyle: {
                zIndex: 1000,
              },
            }}
          />
          {/* <img
            src={image}
            alt="Olimato Emollient Oil"
            className="w-full h-auto object-cover"
          /> */}
        </div>
        <div className="md:flex-1 text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold text-teal-600">
            Olimato Emollient Oil
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            <strong>INGREDIENTS :</strong> Olive Oil, Caprylic Capric
            Triglycerides, Isopropyl Myristate, Butylated Hydroxytoluene, Colour
            Quinoline Yellow S.S C.I. No. (47000) & Perfume.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-teal-600">
              For Dry Skin
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              - Massaging your skin daily with olive oil is an excellent way to
              combat dry or flaky skin caused by harsh weather.
            </p>

            <h3 className="text-lg font-semibold text-teal-600 mt-4">
              For Muscle Spasms
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              - Massage therapy on its own helps to relieve pain, aches, and
              muscle spasms.
            </p>

            <h3 className="text-lg font-semibold text-teal-600 mt-4">
              For Head Massage
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              - Olive oil helps to heal dry, flaky scalp conditions such as
              dandruff. Scalp massage with Olive oil promotes healthier,
              shinier, and more manageable hair.
            </p>

            <ul className="list-disc list-inside text-sm text-gray-600 mt-4">
              <li>Moisturize skin</li>
              <li>Build Strong Fingernails</li>
              <li>Prevent Hair Loss</li>
              <li>Relieve Pan Spasm</li>
            </ul>

            <p className="text-sm text-gray-600 mt-4">
              <strong>Packing Available :</strong> 110ml.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>For Good Health & Body</strong>
            </p>

            <p className="text-sm text-gray-600 mt-4">
              <strong>Category:</strong> Baby Care
            </p>
          </div>
        </div>
        {/* review */}
      </Link>
      {/* review page */}
      <div className="w-full mx-auto mt-10 mb-12 ">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Reviews</h2>
        <p className="text-sm text-gray-600">
          Be the first to review <strong>“Olimato Emollient Oil”</strong>
        </p>
        <p className="text-sm text-red-600 mb-4">
          Your email address will not be published. Required fields are marked{" "}
          <span className="font-bold">*</span>
        </p>
        {/* Star Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-gray-300 hover:text-yellow-500 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2l2.09 6.26L20 9l-5.17 3.76L15 18l-3-2.18L9 18l1.17-5.24L5 9l5.91-.74L12 2z"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Comment Textarea */}
        <textarea
          className="w-full h-32 p-2 border text-red-500 focus:text-white border-black focus:bg-[#283275] rounded-md mb-4 focus:outline-none "
          placeholder="Your review"
        ></textarea>

        {/* Name Input */}
        <input
          type="text"
          className="w-full p-2 border text-red-500 border-black rounded mb-4 focus:outline-none "
          placeholder="Name *"
        />

        {/* Email Input */}
        <label htmlFor="">Email*</label>
        <input
          type="email"
          className="w-full p-2 border text-red-500 border-black rounded mb-4 focus:outline-none"
          placeholder="Email *"
        />

        {/* Save Information Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-teal-600"
            />
            <span className="ml-2 text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full py-2 px-4 bg-[#283275] text-white font-semibold  hover:bg-[#1d2767] focus:outline-none focus:ring-2 focus:ring-blue-600">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
