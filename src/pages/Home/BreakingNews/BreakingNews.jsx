import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = ({ newsItems }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 mt-6">
      <button
        className="bg-red-600 text-base text-white py-2 px-4 rounded mr-4"
        onClick={() => alert("Latest news clicked!")}
        aria-label="Show latest news">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        speed={80}
        className="text-lg font-medium text-gray-800"
        aria-label="Breaking news">
        {newsItems.map((item, index) => (
          <Link key={index} className="hover:underline mr-12" to={item.link}>
            {item.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

// Default props for demo purposes
BreakingNews.defaultProps = {
  newsItems: [
    { title: "See what Sheikh Hasina is doing in Dubai", link: "/egg" },
    { title: "EGG News", link: "/egg" },
    { title: "Potato News", link: "/egg" },
    { title: "Cucumber News", link: "/egg" },
    { title: "Pumpkin News", link: "/egg" },
  ],
};

export default BreakingNews;
