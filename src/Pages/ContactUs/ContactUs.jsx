import image from "../../assets/get-in-touch.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const ContactUs = () => {
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
          <h1 className="text-5xl font-bold text-white">Contact us</h1>
        </div>
      </div>
      {/* contact from here  */}
      <div className="section mt-8">
        <div className="flex flex-col md:flex-row  mx-auto">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#283275]">
              Please Feel Free to Contact
            </h2>
            <div className="flex flex-col gap-2 rounded-lg mt-6">
              {/* Contact Section */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center  w-12 h-12 bg-teal-500 text-white rounded-full">
                    <IoIosCall />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Mr. Vipan Grover
                    </p>
                    <p className="text-gray-700">+91-9316818364</p>
                    <p className="text-gray-900 font-semibold mt-2">
                      Mr. Amit Grover
                    </p>
                    <p className="text-gray-700">+91-9357606500</p>
                  </div>
                </div>
              </div>
              {/* Address Section */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-16 h-12 bg-teal-500 text-white rounded-full">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Address</p>
                    <p className="text-gray-700">
                      Swisskem Healthcare, Khasra No. 77/3, Bathri, Tehsil
                      Haroli, Distt. Una-174301 (Himachal Pradesh), India.
                    </p>
                  </div>
                </div>
              </div>
              {/* Email Section */}
              <div className=" bg-gray-100 p-5 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-full">
                    <MdOutlineEmail />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">E-Mail</p>
                    <p className="text-gray-700">info.swisskem@yahoo.com</p>
                    <p className="text-gray-700">info@swisskem.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#283275]">
              Get in Touch
            </h2>
            <form className="mt-6">
              <div className="mb-4">
                <input
                  className="w-full text-white p-3 border border-black rounded placeholder:text-white focus:bg-[#283275] focus:outline-none bg-[#34cedacc]"
                  type="text"
                  placeholder="First Name *"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full  text-white p-3 border border-black rounded placeholder:text-white focus:bg-[#283275] focus:outline-none bg-[#34cedacc]"
                  type="text"
                  placeholder="Last Name *"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full text-white p-3 border border-black placeholder:text-white  rounded focus:bg-[#283275] focus:outline-none bg-[#34cedacc]"
                  type="email"
                  placeholder="Email Address *"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full text-white p-3 border placeholder:text-white border-black rounded focus:bg-[#283275] focus:outline-none bg-[#34cedacc]"
                  type="tel"
                  placeholder="Phone Number *"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows={5}
                  className="w-full text-white p-3 border placeholder:text-white border-black rounded focus:bg-[#283275] focus:outline-none bg-[#34cedacc]"
                  placeholder="Message *"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-[#283275] text-white rounded hover:bg-[#34cedacc] focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                SUBMIT FORM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
