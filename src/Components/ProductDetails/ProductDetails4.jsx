/* eslint-disable react/no-unescaped-entities */
// import ReactImageMagnify from "react-image-magnify";
import image from "../../assets/Inthyzol Soap.png";

const ProductDetails4 = () => {
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
          <h2 className="text-xl font-semibold text-teal-600">INTHYZOL SOAP</h2>
          {/* <h4 className="text-sm">
          Water Resistant & Oil Free Micronized Sunscreen Aqua Gel
          </h4> */}
          <p className="text-sm text-gray-600 mt-2">
            <strong>TREATMENT FOR : </strong> All Fungal infection, Candidal
            Vulvo-Vaginitis, Tinea Corporis, Tinea Pedis Seborrhoeic Dermatitis,
            Relives from itching & irritation causes by body fungus
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-teal-600">COMPOSITION : </strong>{" "}
              Ketoconazole........2.00%w/w, Zinc Pyrithione.... 1.00%w/w, with
              aloevera
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91]">DESCRIPTION :</strong> A skin
              Inthyzol Soap Contains the active ingredients Ketoconazole which
              is medically proven to be effective against P.ovale, the organism
              which most skin specialists agree is the causes of anti-fungal.
              Considering the pharmacological actions of the drugs it can be
              noted that both act two different sites by different mechanisms of
              actions and has synergistic actions. Ketoconazole is the most well
              studied anti- fungal medication making Inthyzol Soap, the
              scientific answer in the treatment of fungal with over a decade of
              clinical experience. <strong>Inthyzol Soap : </strong> is also
              unique in that its effect is long lasting even after rinsing. It
              carries on working for serveral days..
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#742b91]">Ketoconazole:</strong>{" "}
              Ketoconazole is used to treat infections caused by a fungus or
              yeast. It works by killing the fungus or yeast or preventing its
              growth.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">Zinc pyrithione: </strong>
              Zinc pyrithione is an antibacterial and antifungal agent. It is
              used as an antifungal, primarily as a treatment for dandruff and
              seborrheic dermatitis. Its current antibacterial uses are treating
              Streptococcus and Staphylococcus infections and psoriasis, eczema,
              ringworm and athlete's foot.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-[#00a54f]">Aloevera : </strong> Aloevera
              helps treat inflammation, wounds and burns. The anti-allergic
              property of aloevera is a useful in the treatment of various skin
              diseases like eczema, psoriasis, itchy skin and so on.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-900">DIRECTION OF USE : </strong> A
              Rub gently produce lather. Allow it for 3-5 minutes and then wash
              throughly.
            </p>
            {/* <p className="text-sm text-gray-600 mt-2">
              <strong className="text-red-500">WARNINIGS : </strong> A skin
              whitening soap works by removing melanin from your skin’s
              epidermal layer, making it look white and fairer then other areas
              on the body. Furthermore, this type of soap Works by removing the
              dead calls on your face or body and giving it a fresh look.
            </p> */}
            <p className="text-sm text-gray-600 mt-4">
              <strong>Supply :</strong> 75gm Per PACK.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              1) Store in dry and cool place <br />
              2) Keep out of reach of children. <br />
              3) For external use only.
            </p>
          </div>
        </div>
        {/* review */}
      </div>
      {/* review page */}
      <div className="w-full mx-auto mt-10 mb-12 ">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Reviews</h2>
        <p className="text-sm text-gray-600">
          Be the first to review <strong>“INTHYZOL SOAP”</strong>
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

export default ProductDetails4;
