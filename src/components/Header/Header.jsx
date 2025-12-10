import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'glass-card shadow-glow' : 'bg-transparent'
            } animate-slideDown`}>
            <nav className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <NavLink to="/" className="flex items-center gap-3 group">
                        {/* Animated Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Brand Name */}
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-300 via-accent-300 to-secondary-300 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                                Soumi Samanta
                            </h1>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Full Stack Developer</p>
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        <div className="glass-card rounded-full px-2 py-2">
                            <ul className="flex items-center gap-1">
                                {[
                                    { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                                    { path: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                                    { path: '/skills', label: 'Skills', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                                    { path: '/projects', label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
                                    { path: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                                ].map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                                                    : "text-gray-300 hover:text-white hover:bg-white/10"
                                                }`
                                            }
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                                            </svg>
                                            <span className="font-medium">{item.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-xl glass-card hover:bg-white/10 transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'
                                    }`}
                            ></span>
                            <span
                                className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                            ></span>
                            <span
                                className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden -z-10"
                            onClick={closeMenu}
                        ></div>

                        {/* Menu */}
                        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 animate-fadeIn shadow-2xl">
                            <ul className="space-y-2">
                                {[
                                    { path: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                                    { path: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                                    { path: '/skills', label: 'Skills', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                                    { path: '/projects', label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
                                    { path: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
                                ].map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                                                    : "text-gray-300 hover:text-white hover:bg-white/10"
                                                }`
                                            }
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                                            </svg>
                                            <span className="font-medium">{item.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}
