import { MdOutlinePhoneIphone } from "react-icons/md";
import logo from "../../../assets/WhatsApp Image 2024-08-19 at 18.56.57_1c51588e.jpg";
import { IoIosArrowDown, IoMdMailOpen } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] hover:bg-[#283275] px-6"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        About Us
      </NavLink>
      {/* <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Our Products
      </NavLink> */}
      <NavLink
        to="/all-product"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "group active bg-[#283275] p-[15px] px-6 "
            : "group p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        <ul className="relative">
          <li className="flex uppercase items-center gap-5">
            Our Products <IoIosArrowDown />
          </li>
          <ul className="absolute bg-[#34cedacc] bg-opacity-60 top-[31px] lg:-left-6 mt-2 z-[9] opacity-0 group-hover:opacity-100 hover:transition-opacity hover:duration-300 hidden group-hover:block border text-white">
            <div className="lg:w-96 ">
              <li className="flex flex-col  ">
                <NavLink
                  to="/all-product"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group p-3 border-b border-[#1cb4bfcc] bg-[#283275]"
                      : " hover:bg-[#283275] p-3 group border-b border-[#1cb4bfcc]"
                  }
                >
                  All Product
                </NavLink>
                <NavLink
                  to="/product/detail"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group p-3 border-b border-[#1cb4bfcc] bg-[#283275]"
                      : " hover:bg-[#283275] p-3 group border-b border-[#1cb4bfcc]"
                  }
                >
                  INTHYON SOAP
                </NavLink>
                <NavLink
                  to="/product/detail"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group p-3 border-b border-[#1cb4bfcc] bg-[#283275]"
                      : " hover:bg-[#283275] p-3 group border-b border-[#1cb4bfcc]"
                  }
                >
                  INTHYSUN Aqua Gel
                </NavLink>
              </li>
            </div>
          </ul>
        </ul>
      </NavLink>
      <NavLink
        to="/quality"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Quality
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Contact us
      </NavLink>
      <NavLink
        to="/our-official"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Our Official
      </NavLink>
      <NavLink
        to="/our-activity"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Our Activity
      </NavLink>
      <NavLink
        to="/live"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Live
      </NavLink>
      <NavLink
        to="/document"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-[15px] px-6"
            : "p-[15px] px-6 hover:bg-[#283275]"
        }
      >
        Document
      </NavLink>
    </>
  );

  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className="flex lg:hidden justify-end transition duration-500 delay-200  bg-[#1ad7e6] px-5"
      >
        <IoMenuSharp className="text-5xl text-white" />
      </div>
      {open ? (
        <div className="flex flex-col lg:hidden text-white bg-[#1ad7e6]">
          {navLinks}
        </div>
      ) : null}
      <div className="bg-[#1ad7e6] text-center lg:text-start">
        <p className=" section p-4">GST No. 02AFQPG3910A1Z6</p>
      </div>
      {/* logo and phone number  */}
      <div className="flex flex-col lg:flex-row p-2 items-center gap-6 justify-between section">
        <Link to="/"><img className="w-40" src={logo} alt="" /></Link>
        <div className="flex flex-col font-bold gap-3 md:flex-row items-center">
          <p className="flex items-center gap-1">
            <MdOutlinePhoneIphone /> 01925921227
          </p>
          <p className="flex items-center gap-1">
            <IoMdMailOpen />
            info@InthyInternational.com
          </p>
        </div>
      </div>
      {/* navbar 2  */}
      <div className="bg-[#1ad7e6] hidden lg:block">
        <div className="section flex items-center text-white uppercase">
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
