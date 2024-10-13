import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  const formattedDate = () => moment().format("dddd, MMMM D, YYYY");

  return (
    <div className="text-center mt-10">
      <img
        className="mx-auto"
        src={logo}
        alt="Company Logo" // Improved alt text for accessibility
      />
      <p className="mt-5">Journalism Without Fear or Favour</p>
      <p className="text-xl">{formattedDate()}</p>
    </div>
  );
};

export default Header;
