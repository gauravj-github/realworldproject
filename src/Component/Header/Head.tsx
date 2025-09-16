import { useState } from "react";
import { ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Headdownbar from "./Headdownbar";
import logo from "../../assets/logo.svg";
import Mobilenav from "./Mobilenav";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // dropdown ke liye
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu ke liye

 

  return (
    <div
      className=" sm:h-15 md:h-20 flex justify-between items-center px-4"
      style={{ backgroundColor: "#FFF" }}
    >
      {/* Logo */}
      <img src={logo} />

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex space-x-2 ">
          <li className="flex justify-center items-center py-2 px-3">
            <button onClick={() => setIsOpen(!isOpen)}>About Us</button>
            <ChevronDownIcon className="w-4 h-4 text-gray-600 mt-1" />
          </li>
          <li className="py-2 px-3 flex justify-center items-center space-x-1">
            <button>Infertility</button>
            <ChevronDownIcon className="w-4 h-4 text-gray-600 mt-1" />
          </li>
          <li className="py-2 px-3 flex justify-center items-center space-x-1">
            <button>Our Center</button>
            <ChevronDownIcon className="w-4 h-4 text-gray-600 mt-1" />
          </li>
          <li className="py-2 px-3 flex justify-center items-center space-x-1">
            <button>Treatments</button>
            <ChevronDownIcon className="w-4 h-4 text-gray-600 mt-1" />
          </li>
          <li className="py-2 px-3 flex justify-center items-center">
            <button>Doctors</button>
          </li>
          <li className="py-2 px-3 flex justify-center items-center">
            <button>Success Stories</button>
          </li>
          <li className="py-2 px-3 flex justify-center items-center space-x-1">
            <button>Patient Resources</button>
            <ChevronDownIcon className="w-4 h-4 text-gray-600 mt-1" />
          </li>
          <li className="py-2 px-3 flex justify-center items-center">
            <button>Careers</button>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex space-x-4 items-center text-white">
        <div
          className="py-2 px-4 rounded-xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <select
            className="text-black border-none outline-none bg-transparent"
            defaultValue="en"
          >
            <option value="en">en</option>
            <option value="hi">hi</option>
          </select>
        </div>
        <div
          className="py-2 px-4 rounded-2xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <XMarkIcon className="w-8 h-8 text-black" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-black" />
          )}
        </button>
      </div>

      {/* Dropdown Example */}
      {isOpen && <Headdownbar />}
      
      {/* Mobile Menu */}
      {mobileMenu && (
       <Mobilenav/>
      )}
    </div>
  );
};

export default Navbar;
