import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu({ isOpen, closeMenu }) {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0 z-50" : "translate-x-full z-0"
      } fixed inset-y-0 right-0 w-64 bg-zinc-900 transform transition-transform ease-in-out duration-300 overflow-y-auto`}
    >
      <ul className="p-5 space-y-4">
        <li>
          <NavLink to="/" className="block text-gray-200 hover:text-blue-600">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="block text-gray-200 hover:text-blue-600">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/book-us" className="block text-gray-200 hover:text-blue-600">
            Book Us
          </NavLink>
        </li>
        <li>
          <a className="block text-gray-200 hover:text-blue-600" href="https://linktr.ee/givemegoldband">
            LinkTree
          </a>
        </li>
      </ul>
      <button
        onClick={closeMenu}
        className="text-gray-200 hover:text-blue-600 p-3 absolute top-0 right-0 m-4"
      >
        ✕
      </button>
    </div>
  );
}

export default SideMenu;
