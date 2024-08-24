import bgImage from "../../assets/welcome-to.webp";

const Swisskem = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center lg:flex-row items-center bg-white">
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={bgImage}
            alt="Healthcare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 w-full lg:p-16 flex flex-col justify-center items-center p-9">
          <h1 className="text-3xl font-semibold text-blue-700 text-center lg:text-left">
            WELCOME TO Swisskem Healthcare
          </h1>
          <hr className="my-4 border-blue-300 w-16 mx-auto lg:mx-0" />
          <p className="text-gray-600 text-center lg:text-left mb-6">
            Swisskem Healthcare launched business initially in India where in
            solid steps has gained the Indian market showing conscientiousness
            and consistency for 2 decades. From the early days Soaps and Derma
            cosmetics were the core business and the portfolio was gradually
            enriched.
            <br />
            <br />
            Nowadays, there are complete series for all cosmetic needs
            (moisturizing and anti-aging face & body treatment) and special
            dermatological needs (acne, psoriasis, atopy, feminine care, baby &
            kid care, hair care, sun protection).
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500">
              More Info...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swisskem;
