// import ReactImageMagnify from "react-image-magnify";
import image from "../../assets/Screenshot_2024-08-19_131927-removebg-preview.png";

const ProductDetails5 = () => {
  return (
    <div className="section">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8 bg-white mt-12">
        <div className="md:flex-1 text-center ">
          {/* <ReactImageMagnify
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
            }}
          /> */}
          <img
            src={image}
            alt="Olimato Emollient Oil"
            className="md:w-[60%] object-cover inline"
          />
        </div>
        <div className="md:flex-1 text-left mt-4 md:mt-0">
          <h2 className="text-xl font-semibold text-teal-600">
            INTHYZOL SHAMPOO
          </h2>
          {/* <h4 className="text-sm">
            Water Resistant & Oil Free Micronized Sunscreen Aqua Gel
          </h4> */}
          <p className="text-sm text-gray-600 mt-2">
            <strong>TREATMENT FOR : </strong>Dandruff (Pityriasis capitis),
            Itching & Oily scalp, All allergic condition, Tinea capitis,
            Pityrosporal versicolor, Prevents Hair loss, Strengthens and
            thickens hair point Blepharitis, Cradle cap, Eczema and Seborrhoeic
            Dermatitis
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-teal-600">COMPOSITION :</strong>{" "}
              Ketoconazole ..............................00%w/v, Zinc Pyrithione
              (ZPTO)..............100%w/v, Shampoo Base ..............Q.S. with
              Biotin & aloevera
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91] uppercase">
                Ketoconazole :{" "}
              </strong>
              It is an azolo antifungal that works by preventing the growth of
              fungus longer duration of action after the soap is washed out.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91]">Zinc pyrithione:</strong> It
              has antifungal anti bacterial and antimicrobial properties that
              can help seborrhoeic dermatitis, scalp psoriasis and acne. It can
              inhibit the growth of yeast which is the main factor in dandruff.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">Aloe vera : </strong>
              Aloe vera helps treat inflammation, wounds and burns. The
              anti-allergic property of aloe vera is a useful in the treatment
              of various skin diseases like eczema, psoriasis, itchy skin and so
              on.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#00a54f]">Biotin : </strong>
              Biotin Stimulates keratin production in hair and Increases the
              rate of follicle growth
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-900">DIRECTION OF USE : </strong>
              Inthyzol shampoo should be used two (2) times in every week for
              consecutive 2-4 weeks. To prevent dandruff further back its should
              use again another 1-2 weeks (once/week)
            </p>
            {/* <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">WARNINIGS : </strong> A skin
              whitening soap works by removing melanin from your skin’s
              epidermal layer, making it look white and fairer then other areas
              on the body. Furthermore, this type of soap Works by removing the
              dead calls on your face or body and giving it a fresh look.
            </p> */}
            <p className="text-sm text-gray-600 mt-4">
              <strong>Supply :</strong> 100 ml per bottle.
            </p>
          </div>
        </div>
        {/* review */}
      </div>
      {/* review page */}
      <div className="w-full mx-auto mt-10 mb-12 ">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Reviews</h2>
        <p className="text-sm text-gray-600">
          Be the first to review <strong>“INTHYZOL SHAMPOO”</strong>
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

export default ProductDetails5;
