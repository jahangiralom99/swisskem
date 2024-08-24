import { MdKeyboardArrowRight } from "react-icons/md";
import image from "../../../assets/swiss-footer-bg-1.jpg";

const Footer = () => {
  return (
    <div
      className="h-full bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <footer className=" text-white pt-12">
        <div className="p-5 section mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl text-[#34cedacc] font-semibold mb-4">
              Information
            </h3>
            <hr className="my-4 border-2 border-[#34cedacc] w-8 " />
            <p>
              We are known to be a trusted manufacturer, exporter, and supplier
              of Healthcare Products such as Healthcare Products, Beauty
              Products, and many more. The products are highly formulated to
              suit all skin and hair types.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#34cedacc]">Product</span> Category
            </h3>
            <hr className="my-4 border-2 border-[#34cedacc] w-8 " />
            <ul className="space-y-4 ml-4">
              <li className="flex items-center gap-3">
                <MdKeyboardArrowRight className="text-[#34cedacc] text-2xl" />{" "}
                Hand Sanitizer and Hand Wash
              </li>
              <hr />
              <li className="flex items-center gap-3">
                <MdKeyboardArrowRight className="text-[#34cedacc] text-2xl" />{" "}
                Skin Care
              </li>
              <hr />
              <li className="flex items-center gap-3">
                <MdKeyboardArrowRight className="text-[#34cedacc] text-2xl" />{" "}
                Hair Care
              </li>{" "}
              <hr />
              <li className="flex items-center gap-3">
                <MdKeyboardArrowRight className="text-[#34cedacc] text-2xl" />{" "}
                Bathing Bar
              </li>{" "}
              <hr />
              <li className="flex items-center gap-3">
                <MdKeyboardArrowRight className="text-[#34cedacc] text-2xl" />{" "}
                Dermatological
              </li>
              <hr />
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#34cedacc]">Get</span> In Touch
            </h3>
            <hr className="my-4 border-2 border-[#34cedacc] w-8 " />
            <p className="">
              Address:
              <br />
              Swisskem Healthcare, Khasra No. 77/3, Bathri, Tehsil Haroli,
              Distt. Una-174301 (Himachal Pradesh), India.
            </p>
            <p className=" mt-4">
              E-Mail:
              <br />
              info@swisskem.com
              <br />
              info.swisskem@yahoo.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#34cedacc]">Locate</span> Us
            </h3>
            <hr className="my-4 border-2 border-[#34cedacc] w-8 " />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.148921875983!2d76.11617571490608!3d31.52508678138012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bfffc7b2f4b2f%3A0x32f2a5f0d29f9cf1!2sSwisskem%20Healthcare!5e0!3m2!1sen!2sin!4v1628490981610!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              title="Swisskem Healthcare Location"
            ></iframe>
          </div>
        </div>
        <div className="text-center p-5 bg-white text-sm text-gray-400 mt-8">
          <p>
            &copy; 2024 Swisskem Healthcare. All rights reserved. Powered By :
            Point Internet Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
