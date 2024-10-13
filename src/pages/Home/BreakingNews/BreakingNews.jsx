import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center p-4 bg-gray-100 mt-6">
      <button className="bg-red-600 text-base text-white py-2 px-4 rounded mr-4">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        speed={80}
        className="text-lg font-medium text-gray-800">
        <Link className="hover:underline mr-12" to="/egg">
          See what Sheikh Hasina is doing in Dubai
        </Link>
        <Link className="hover:underline mr-12" to="/egg">
          EGG News
        </Link>
        <Link className="hover:underline mr-12" to="/egg">
          Potato News
        </Link>
        <Link className="hover:underline mr-12" to="/egg">
          Cucumber News
        </Link>
        <Link className="hover:underline mr-12" to="/egg">
          Pumpkin News
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
