import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import leftCardImg1 from "../../../assets/1.png";
import leftCardImg2 from "../../../assets/2.png";
import leftCardImg3 from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    fetch("categories.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  // Determine if the first link should always be active
  const firstLinkActive = location.pathname === "/" || categories.length === 0;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">All Categories</h1>
      <div className="space-y-4 mt-6">
        {categories.map((category, index) => (
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
        ))}
      </div>

      <div className="space-y-8 mt-4">
        <div className="flex flex-col">
          <img
            src={leftCardImg1}
            alt="Descriptive alt text"
            className="w-full h-auto"
          />
          <h2 className="font-medium text-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex items-center space-x-2 mt-3">
            <strong className="text-sm text-gray-700">Sports</strong>
            <p className="flex gap-x-2 items-center text-sm text-gray-500">
              <FaRegCalendar /> {moment().format("dddd D, YYYY")}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <img
            src={leftCardImg2}
            alt="Descriptive alt text"
            className="w-full h-auto"
          />
          <h2 className="font-medium text-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex items-center space-x-2 mt-3">
            <strong className="text-sm text-gray-700">Sports</strong>
            <p className="flex gap-x-2 items-center text-sm text-gray-500">
              <FaRegCalendar /> {moment().format("dddd D, YYYY")}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <img
            src={leftCardImg3}
            alt="Descriptive alt text"
            className="w-full h-auto"
          />
          <h2 className="font-medium text-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex items-center space-x-2 mt-3">
            <strong className="text-sm text-gray-700">Sports</strong>
            <p className="flex gap-x-2 items-center text-sm text-gray-500">
              <FaRegCalendar /> {moment().format("dddd D, YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
