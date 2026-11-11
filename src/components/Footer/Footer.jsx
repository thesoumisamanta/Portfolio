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
            {/* Decorative Divider */}
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
            </div>

            <footer className="glass-card border-t border-white/10 py-10">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
                            <ul className="space-y-3">
                                <li className="text-sm text-gray-400 flex items-start gap-2">
                                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>Burdwan, West Bengal<br />Pin - 713125</span>
                                </li>
                                <li className="text-sm text-gray-400 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <span>+91 9883057054</span>
                                </li>
                                <li className="text-sm text-gray-400 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="break-all">samantasoumi10@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Connections */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
                            <div className="flex gap-3">
                                <Link
                                    to="https://www.linkedin.com/in/soumi-samanta-1ba258236/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover-lift hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all duration-300">
                                        <FaLinkedinIn className="text-white group-hover:scale-110 transition-transform duration-300" size={18} />
                                    </div>
                                </Link>

                                <Link
                                    to="mailto:samantasoumi10@gmail.com"
                                    className="group"
                                >
                                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover-lift hover:bg-gradient-to-br hover:from-accent-500 hover:to-secondary-500 transition-all duration-300">
                                        <FaEnvelope className="text-white group-hover:scale-110 transition-transform duration-300" size={18} />
                                    </div>
                                </Link>

                                <Link
                                    to="https://github.com/thesoumisamanta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover-lift hover:bg-gradient-to-br hover:from-secondary-500 hover:to-primary-500 transition-all duration-300">
                                        <FaGithub className="text-white group-hover:scale-110 transition-transform duration-300" size={18} />
                                    </div>
                                </Link>

                                <Link
                                    to="https://wa.me/9883057054"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover-lift hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300">
                                        <FaWhatsapp className="text-white group-hover:scale-110 transition-transform duration-300" size={18} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
