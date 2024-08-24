import { MdOutlinePhoneIphone } from "react-icons/md";
import logo from "../../../assets/logo-1.png";
import { IoMdMailOpen } from "react-icons/io";
import { NavLink } from "react-router-dom";
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
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 hover:bg-[#283275] px-6"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 px-6 hover:bg-[#283275]"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 px-6 hover:bg-[#283275]"
        }
      >
        Our Products
      </NavLink>
      <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 px-6 hover:bg-[#283275]"
        }
      >
        Quality
      </NavLink>
      <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 px-6 hover:bg-[#283275]"
        }
      >
        Infrastructure
      </NavLink>
      <NavLink
        to="/f"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-[#283275] p-3 px-6"
            : "p-3 px-6 hover:bg-[#283275]"
        }
      >
        Contact us
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
        <div className="flex flex-col lg:hidden text-white bg-[#1ad7e6]">{navLinks}</div>
      ) : null}
      <div className="bg-[#1ad7e6] text-center lg:text-start">
        <p className=" section p-4">GST No. 02AFQPG3910A1Z6</p>
      </div>
      {/* logo and phone number  */}
      <div className="flex flex-col lg:flex-row mt-4 items-center gap-6 justify-between section">
        <img src={logo} alt="" />
        <div className="flex flex-col font-bold gap-3 md:flex-row items-center">
          <p className="flex items-center gap-1">
            <MdOutlinePhoneIphone /> +91-9316818364
          </p>
          <p className="flex items-center gap-1">
            <IoMdMailOpen />
            info@swisskem.com
          </p>
        </div>
      </div>
      {/* navbar 2  */}
      <div className="bg-[#1ad7e6] hidden lg:block">
        <div className="section p-3 text-white uppercase">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
