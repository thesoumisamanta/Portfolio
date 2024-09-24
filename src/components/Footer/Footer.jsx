import React from "react";
import {
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <hr />
            <footer className="py-4"> 
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4">
                            
                            <Link
                                to="https://www.linkedin.com/in/soumi-samanta-1ba258236/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform"
                            >
                                <FaLinkedinIn size={24} />
                            </Link>
                            
                            <Link
                                to="mailto:samantasoumi10@gmail.com"
                                className="hover:scale-105 transition-transform"
                            >
                                <FaEnvelope size={24} />
                            </Link>
                            
                            <Link
                                to="https://github.com/thesoumisamanta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform"
                            >
                                <FaGithub size={24} />
                            </Link>
                            
                            <Link
                                to="https://wa.me/9883057054"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform"
                            >
                                <FaWhatsapp size={24} />
                            </Link>
                        </div>

                        <div className="mt-4 border-t border-gray-700 pt-2 flex flex-col items-center">
                            <p className="text-sm">
                                &copy; thesoumisamanta. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
