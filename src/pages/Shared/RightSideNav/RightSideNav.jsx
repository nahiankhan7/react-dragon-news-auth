import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import adBG from "../../../assets/bg1.png";

const RightSideNav = () => {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Login With</h2>
        <button className="flex items-center justify-center w-full border-2 text-blue-600 border-blue-600 rounded-lg p-2 hover:bg-blue-50 transition duration-200">
          <FaGoogle className="mr-2 text-blue-600" /> Login with Google
        </button>
        <button className="flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition duration-200 mt-2">
          <FaGithub className="mr-2 text-gray-500" /> Login with Github
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex items-center text-lg border rounded-t-lg border-gray-400">
          <FaFacebook className="mr-3 text-blue-500" />
          <span>Facebook</span>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex items-center text-lg border-x border-gray-400">
          <FaTwitter className="mr-3 text-sky-500" />
          <span>Twitter</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 flex items-center text-lg border rounded-b-lg border-gray-400">
          <FaInstagram className="mr-3 text-red-500" />
          <span>Instagram</span>
        </a>
      </div>

      <div className="mb-6 bg-gray-200 p-4">
        <h2 className="text-2xl font-semibold mb-4">Q-Zone</h2>
        <img src={qZone1} alt="Q-Zone image 1" className="mb-2" />
        <img src={qZone2} alt="Q-Zone image 2" className="mb-2" />
        <img src={qZone3} alt="Q-Zone image 3" />
      </div>

      <div className="mb-6">
        <div className="relative">
          <img
            src={adBG}
            alt="Background for newspaper advertisement"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 p-2 lg:p-4 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Create an Amazing Newspaper
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur, earum?
            </p>
            <button className="p-2 bg-red-500 text-white font-medium hover:bg-red-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
