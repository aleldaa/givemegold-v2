import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";

function NavBar() {



    return (
        <div>
            <nav className="w-full bg-zinc-900 shadow">
                <ul className="items-center p-5 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="font-semibold text-gray-200 hover:text-blue-600">
                        <NavLink to="/" className="link1">Home</NavLink>
                    </li>
                    <li className="font-semibold text-gray-200 hover:text-blue-600">
                        <NavLink to="/about" className="link1">About</NavLink>
                    </li>
                    <li className="font-semibold text-gray-200 hover:text-blue-600">
                        <NavLink to="/book-us" className="link1">Book Us</NavLink>
                    </li>
                    <li className="font-semibold text-gray-200 hover:text-blue-600">
                        <NavLink to="/donate" className="link1">Donate</NavLink>
                    </li>
                    <a className="link1" href="https://linktr.ee/givemegoldband">
                        <img className="insta-link h-6" src="/src/images/linktree2.png" />
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
