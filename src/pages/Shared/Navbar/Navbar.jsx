import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../assets/user.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign Out successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/career">
        Career
      </NavLink>
    </>
  );

  return (
    <nav className="flex justify-between items-center p-4 mt-4">
      <div className="flex space-x-6 mx-auto">{navLinks}</div>

      <div className="flex items-center space-x-4">
        <img width={40} src={userLogo} alt="" />

        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-black/70 text-white py-2 px-4 rounded hover:bg-black transition">
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

export default Navbar;
