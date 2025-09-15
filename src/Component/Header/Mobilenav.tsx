import { useState } from "react";
import { ChevronRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="absolute top-20 left-0 w-full h-screen bg-white shadow-md md:hidden p-4 overflow-y-auto z-50">
      {activeMenu === "main" && (
        <>
          <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-600">
            <li>Home</li>
            <span className="border-b border-gray-300"></span>
            <li
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveMenu("about")}
            >
              About Us <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </li>
            <span className="border-b border-gray-300"></span>
            <li>Infertility</li>
            <span className="border-b border-gray-300"></span>
            <li
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveMenu("centers")}
            >
              Our Centers <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </li>
            <span className="border-b border-gray-300"></span>
            <li>Treatments</li>
            <span className="border-b border-gray-300"></span>
            <li>Doctors</li>
            <span className="border-b border-gray-300"></span>
            <li>Success Stories</li>
            <span className="border-b border-gray-300"></span>
            <li
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveMenu("resources")}
            >
              Patient Resources{" "}
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </li>
            <span className="border-b border-gray-300"></span>
            <li>Careers</li>
            <span className="border-b border-gray-300"></span>
          </ul>

          {/* Bottom buttons */}
          <div className="mt-6 flex justify-between ">
            <button className="bg-blue-600 text-white p-4 rounded-lg">
              Book Your Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 p-4 rounded-lg">
              Check My Fit
            </button>
          </div>
        </>
      )}

      {activeMenu === "about" && (
        <>
          {/* Back Button */}
          <button
            onClick={() => setActiveMenu("main")}
            className="flex items-center text-blue-600 mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back
          </button>

          <h2 className="text-xl font-bold mb-4">Discover Us</h2>
          <ul className="flex flex-col space-y-3">
            <li>Our Story</li>
            <li>Our Approach</li>
            <li>Our Vision & Mission</li>
            <li>Why choose us</li>
            <li>Meet the Team</li>
            <li>Impact & Growth</li>
            <li>FAQs</li>
          </ul>

          {/* Quick Links */}
          <h2 className="text-xl font-bold mt-6 mb-3">Quick Links</h2>
          <ul className="flex flex-col space-y-3">
            <li className="bg-gray-100 p-3 rounded-lg">📞 +91 94239 71260</li>
            <li className="bg-gray-100 p-3 rounded-lg">💬 +91 70309 44041</li>
            <li className="flex justify-between items-center">
              Our Specialists <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </li>
            <li className="flex justify-between items-center">
              Online Consult <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </li>
          </ul>

          {/* Bottom buttons */}
          <div className="mt-6 flex flex-col space-y-3">
            <button className="bg-blue-600 text-white py-2 rounded-lg">
              Book Your Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 py-2 rounded-lg">
              Check My Fit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
