import React, { useState } from "react";
import SideMenu from "./SideMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="w-full">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-blue-600 p-3 ml-auto"
          >
            ☰
          </button>
        </div>
        {/* <div className="flex items-center">
          <div className="w-[150px] mx-auto">
            <img
              src="./src/images/givemegold-logo.png"
              alt="Logo"
              className="max-h-[90px] mt-[-80px] pl-[30px]"
            />
          </div>
        </div> */}
      </nav>
      {isMenuOpen && <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />}
    </div>
  );
}

export default NavBar;
