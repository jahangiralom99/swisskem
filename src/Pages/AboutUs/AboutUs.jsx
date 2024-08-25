import image from "../../assets/about-bg-1.jpg";
import image2 from "../../assets/about-bg.webp";
import image3 from "../../assets/Our-Success-Story.webp";
import image4 from "../../assets/slider-5.webp";
const AboutUs = () => {
  const data = [
    {
      icon: "👥",
      number: "25",
      label: "Total Number of Employees",
    },
    {
      icon: "🌱",
      number: "2010",
      label: "Year of Establishment",
    },
    {
      icon: "🏢",
      number: "50,000",
      label: "Square F.T Factory Area",
    },
    {
      icon: "👍",
      number: "100%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div>
      {/* top banner  */}
      <div
        className="h-72 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute section top-1/2 transform left-16 md:left-32">
          <h1 className="text-5xl font-bold text-white">About us</h1>
        </div>
      </div>
      {/*  section 1st */}
      <div className="relative section mt-12">
        <div className=" mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About Swisskem Healthcare
            </h1>
            <p className="text-teal-400 text-lg mb-4">
              Swisskem expresses the adventuring spirit of innovation &
              extroversion.
            </p>
            <p className="text-gray-700 text-base">
              Swisskem Healthcare launched business initially in India where in
              solid steps has gained the Indian market showing conscientiousness
              and consistency for 2 decades. From the early days Soaps and Derma
              cosmetics were the core business and the portfolio was gradually
              enriched. Nowadays, there are complete series for all cosmetic
              needs (moisturizing and anti-aging face & body treatment) and
              special dermatological needs (acne, psoriasis, atopy, feminine
              care, baby & kid care, hair care, sun protection).
            </p>
          </div>
          {/* Image Section */}
          <div
            className="md:w-1/2 h-64 md:h-96 bg-cover bg-center hidden md:block"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </div>
      </div>
      {/* section 2 */}
      <div className="section flex flex-col md:flex-row items-center gap-6 mt-12">
        {/* Image Section */}
        <div className="md:w-1/2 ww-full">
          <img
            src={image3}
            alt="Our Success Story"
            className="w-full shadow-lg rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Success Story
          </h2>
          <p className="text-gray-700 text-base">
            Swisskem Healthcare established in 2001 aiming at developing,
            producing and trading dermatological products and furthermore
            promoting those products through Medical Representative teams in
            respective medical specialists and trading through the
            Pharmaceutical distribution channel. Since then, Swisskem Healthcare
            has been closely cooperating with Indian professors and key Opinion
            Leaders and Universities for developing dermoceutical products that
            treat a variety of skin disorders. Swisskem Healthcare development
            was parallel to the evolution of dermatology in India. Swisskem
            Healthcare awareness on dermocosmetics was recognized and thus led
            to the installation of its own plant and business expansion.
          </p>
        </div>
      </div>
      {/* section 3  */}
      <div
        style={{ backgroundImage: `url(${image4})` }}
        className="section bg-cover bg-center flex flex-col md:flex-row items-center justify-between my-12 bg-gray-50 p-2 rounded-lg shadow-md"
      >
        {/* Image Section */}
        {/* <div className="md:w-1/2 p-4">
          <img
            src={image4}
            alt="Industry Caters To"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div> */}
        <div></div>
        {/* Text Section */}
        <div className="md:w-1/2 p-9 bg-gray-100 bg-opacity-20 rounded-lg shadow-md justify-end">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 ">
            Industry Caters To
          </h2>
          <p className="text-gray-700 text-base">
            Due to our premium quality medicated products we have been able to
            carve a niche for ourselves in both national and international
            market. We mainly cater our products to various sectors such as
            Cosmetic Industry, Health Industry, and Beauty Industry. Our
            commitment towards delivering high quality products at competitive
            prices has enabled us to develop a large client network.
          </p>
        </div>
      </div>
      {/* section 4  */}
      <div className="flex flex-col items-center mt-12 mb-12">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          We stand by our track record
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="bg-teal-400 text-white rounded-full p-4 text-4xl">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-blue-900">
                {item.number}
              </div>
              <div className="text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
