import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../assets/images/wedmakerLogo.PNG";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/90 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/">
          <img
            src={image}
            alt="Wedmaker Logo"
            className="h-20 w-auto md:h-24 transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          } md:max-h-full`}
        >
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `block px-4 py-3 md:p-2 text-lg md:text-base transition-all duration-300 rounded-md md:rounded-none ${
                isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 hover:bg-white/10"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-3 md:p-2 text-lg md:text-base transition-all duration-300 rounded-md md:rounded-none ${
                isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 hover:bg-white/10"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/clientAlbum"
            className={({ isActive }) =>
              `block px-4 py-3 md:p-2 text-lg md:text-base transition-all duration-300 rounded-md md:rounded-none ${
                isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 hover:bg-white/10"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            ClientAlbum
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-3 md:p-2 text-lg md:text-base transition-all duration-300 rounded-md md:rounded-none ${
                isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 hover:bg-white/10"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-3 md:p-2 text-lg md:text-base transition-all duration-300 rounded-md md:rounded-none ${
                isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400 hover:bg-white/10"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
