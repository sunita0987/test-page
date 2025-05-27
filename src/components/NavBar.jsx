import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isHome = location.pathname === "/home";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isView = location.pathname === "/view";
  const isCounter = location.pathname === "/counter";

  const linkClass = (isActive) =>
    isActive
      ? "font-bold text-red-500 text-xl transition duration-300"
      : "text-green-700 text-xl transition duration-300";

  return (
    <nav className="bg-fuchsia-400 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4">
        <div className="text-2xl font-bold">My Profile</div>

        <button className="text-3xl md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? "✖️" : "☰"}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/home" className={linkClass(isHome)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass(isAbout)}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass(isContact)}>
            Contact
          </NavLink>
          <NavLink to="/view" className={linkClass(isView)}>
            View
          </NavLink>
          <NavLink to="/counter" className={linkClass(isCounter)}>
            Counter
          </NavLink>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-indigo-500 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
          menuOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        } md:hidden z-40`}
      >
        <NavLink to="/home" onClick={toggleMenu} className={linkClass(isHome)}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={toggleMenu}
          className={linkClass(isAbout)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={toggleMenu}
          className={linkClass(isContact)}
        >
          Contact
        </NavLink>
        <NavLink to="/view" onClick={toggleMenu} className={linkClass(isView)}>
          View
        </NavLink>
        <NavLink
          to="/counter"
          onClick={toggleMenu}
          className={linkClass(isCounter)}
        >
          Counter
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
