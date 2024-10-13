import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../assets/user.png";
import { AuthContext } from "../../../provider/AuthProvider";
import PropTypes from "prop-types";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign Out successfully!");
      })
      .catch((error) => {
        console.error("Sign Out Error:", error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg duration-200 ${
            isActive
              ? "font-semibold underline text-blue-600"
              : "text-gray-800 hover:text-blue-600"
          }`
        }>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg duration-200 ${
            isActive
              ? "font-semibold underline text-blue-600"
              : "text-gray-800 hover:text-blue-600"
          }`
        }>
        About
      </NavLink>
      <NavLink
        to="/career"
        className={({ isActive }) =>
          `text-lg duration-200 ${
            isActive
              ? "font-semibold underline text-blue-600"
              : "text-gray-800 hover:text-blue-600"
          }`
        }>
        Career
      </NavLink>
    </>
  );

  return (
    <nav className="flex justify-between items-center p-4 mt-4">
      <div className="flex space-x-6 mx-auto">{navLinks}</div>

      <div className="flex items-center space-x-4">
        <img
          width={40}
          src={userLogo}
          alt="User profile"
          className="rounded-full"
        />

        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-black/70 text-white py-2 px-4 rounded hover:bg-black transition"
            aria-label="Sign out">
            SIGN OUT
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-black/70 text-white py-2 px-4 rounded hover:bg-black transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired,
};

export default Navbar;
