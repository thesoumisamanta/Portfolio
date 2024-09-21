import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const navItems = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "About", path: "/about" },
        { id: 3, text: "Skills", path: "/skills" },
        { id: 4, text: "Projects", path: "/projects" },
        { id: 5, text: "Contact", path: "/contact" },
    ];

    return (
        <div className="bg-gray-900 max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between h-16">
                <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map(({ id, text, path }) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                                <Link to={path} onClick={() => setMenu(false)}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <div onClick={() => setMenu(!menu)}>
                        {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile navbar */}
            {menu && (
                <div ref={menuRef} className="fixed top-16 left-0 right-0 bg-black bg-opacity-75 z-50 slide-down transition-transform duration-500">
                    <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                        {navItems.map(({ id, text, path }) => (
                            <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                                <Link to={path} onClick={() => setMenu(false)}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
