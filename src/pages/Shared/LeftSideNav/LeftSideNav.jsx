import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import leftCardImg1 from "../../../assets/1.png";
import leftCardImg2 from "../../../assets/2.png";
import leftCardImg3 from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch("categories.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const firstLinkActive = location.pathname === "/" || categories.length === 0;

  const currentDate = moment().format("dddd D, YYYY");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">All Categories</h1>
      <div className="space-y-4 mt-6">
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          categories.map((category, index) => (
            <NavLink
              className={({ isActive }) =>
                `block ml-4 text-xl text-gray-600 font-medium p-4 w-full ${
                  isActive || (index === 0 && firstLinkActive)
                    ? "bg-gray-200 rounded-md text-gray-950"
                    : ""
                }`
              }
              key={category.id}
              to={`category/${category.id}`}>
              {category.name}
            </NavLink>
          ))
        )}
      </div>

      <div className="space-y-8 mt-4">
        {[leftCardImg1, leftCardImg2, leftCardImg3].map((img, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={img}
              alt={`Description of image ${index + 1}`}
              className="w-full h-auto"
            />
            <h2 className="font-medium text-xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <div className="flex items-center space-x-2 mt-3">
              <strong className="text-sm text-gray-700">Sports</strong>
              <p className="flex gap-x-2 items-center text-sm text-gray-500">
                <FaRegCalendar /> {currentDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
