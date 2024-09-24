import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="shadow sticky z-50 top-0 bg-gray-900">
            <nav className="text-white border-gray-200 px-6 lg:px-6 py-2.5 h-16 flex items-center justify-between">
                {/* Left spacer to keep the nav centered */}
                <div className="hidden lg:block lg:flex-1"></div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="text-white block lg:hidden ml-auto focus:outline-none focus:ring-0"
                    style={{ backgroundColor: 'transparent' }} // Prevent any background color
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Navigation links */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } w-full lg:flex lg:items-center lg:w-auto lg:static absolute top-16 left-0 right-0 bg-gray-900 lg:bg-transparent`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:mx-auto">
                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/skills"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive
                                        ? "text-orange-700"
                                        : "text-white"
                                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right spacer to balance out the left */}
                <div className="hidden lg:block lg:flex-1"></div>
            </nav>
        </header>
    );
}
