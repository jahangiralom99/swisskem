/* eslint-disable react/no-unescaped-entities */
// import ReactImageMagnify from "react-image-magnify";
import image from "../../assets/Inthyglow Cream.png";

const ProductDetails6 = () => {
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
            className=" object-cover inline"
          />
        </div>
        <div className="md:flex-1 text-left mt-4 md:mt-0">
          <h2 className="text-xl font-semibold text-teal-600">
            INTHYGLOW CREAM
          </h2>
          <h4 className="text-sm">Paraben Free For All Skin Type</h4>
          <p className="text-sm text-gray-600 mt-2">
            <strong>BENEFIT : </strong> Reducing the melanin production. More
            radiant complexion. Moisturizing, Smoothening and whitening.
            Nourishes the skin by hydrating and locking in moisture. Control
            acne formation. Help reduce fine lines and wrinkles, and optimize
            skin texture. Protect Skin From Dryness, maintain Moisture
            Level,repair Skin, lighten Spots, improve Uneven Skin Tone. Best for
            the use in hyper-pigmentation skin conditions including brown spots.
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-teal-600">INDICATIONS : </strong> Melasma,
              4x whitening Action, Arbutin point Acne black spot, Brightening &
              Lightening, Anti-Aging, Out looking black problem,
              Hyper-pigmentation spots.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91]">INGREDIENTS:</strong> Aqua,
              Stearic Acid, Cetyl Alcohol, Carbomer, Glycerin, Propylene Glycol,
              Triethanolamine, Kojic Acid Dipalmitate, Arbutin, Licorice
              Extract, Mulberry Extract, Lactic Acid, Vitamin C, Niacinamide,
              L-Glutathione, Actiwhite Water and Glycerin (and) Surcose
              Dilaurate (and) Polysorbate 20 (and) Pisum sativum (Pea) Extract),
              DMDM Hydantoin, EDTA, Fragrance.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91]">
                Kojic Acid Dipalmitate:
              </strong>{" "}
              Kojic acid dipalmitate: By inhibiting tyrosinase activity, Kojic
              Acid Dipalmitate is capable of suppressing skin pigmentation. Its
              ability to suppress melanin formation makes it effective in
              whitening dark skin, or areas of dark skin.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">Arbutin : </strong> Arbutin is a
              skin-brightening ingredient that targets dark spots,
              hyperpigmentation, and scars. While it is less potent compared to
              hydroquinone, it has a stronger safety profile.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#00a54f]">Licorise extract: </strong>{" "}
              Arbutin is a skin-brightening ingredient that targets dark spots,
              hyperpigmentation, and scars. While it is less potent compared to
              hydroquinone, it has a stronger safety profile with fewer risks of
              side effects.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#00a54f]">Mulberry extract : </strong>{" "}
              Lightens dark spots and skin discolouration. Improves the
              appearance of uneven skin tones. Helps to protect the skin from
              environmental factors. Moisturizes and nourishes the skin. Reduces
              signs of premature ageing. Creates a lovely, radiant and glowing
              complexion.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">Vitamin C : </strong> Vitamin C
              serum has many health benefits for your skin, including promoting
              collagen production and protecting against sun damage. It's
              helpful in lower dark pigmentation of the skin. Provides skin
              hydration also.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-700">L-glutathione : </strong>
              Glutathione plays a significant role in keeping skin healthy and
              young. It not only acts as an astonishing skin- brightening agent
              but is also known to reduce wrinkles, fine lines and improve skin
              elasticity. All these attributes of glutathione are due to its
              amazing skin-protecting properties. Actiwhite Cream supports
              lightening, Brightening & Extra glowing effect naturally by gently
              penetrating the skin's surface. Natural ingredients work to sooth
              and moisturize skin and support lightening.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-900">DIRECTION OF USE : </strong>
              After cleansing and toning, apply proper amount to palm and gently
              pat until absorbed. Apply twice a day all over the face and neck
              area in the morning and night or as directed by the physician.
              [For External use only]
            </p>
            {/* <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">WARNINIGS : </strong> A skin
              whitening soap works by removing melanin from your skin’s
              epidermal layer, making it look white and fairer then other areas
              on the body. Furthermore, this type of soap Works by removing the
              dead calls on your face or body and giving it a fresh look.
            </p> */}
            <p className="text-sm text-gray-600 mt-4">
              <strong>Supply :</strong> 20gm per tube.
            </p>
          </div>
        </div>
        {/* review */}
      </div>
      {/* review page */}
      <div className="w-full mx-auto mt-10 mb-12 ">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Reviews</h2>
        <p className="text-sm text-gray-600">
          Be the first to review <strong>“INTHYGLOW CREAM”</strong>
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

export default ProductDetails6;
