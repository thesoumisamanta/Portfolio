import React from "react";
import { ReactTyped } from "react-typed";
import pic from "../../../public/assets/me/me_professional.jpg";

export default function Home() {
    return (
        <>
            <div
                name="Home"
                className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 flex items-center">
                <div className="flex flex-col md:flex-row items-center w-full gap-12 md:gap-20">
                    {/* Text Content - Left Side */}
                    <div className="md:w-1/2 space-y-6 order-2 md:order-1">
                        <div className="flex flex-col space-y-4">
                            {/* Greeting with Animation */}
                            <h1 className="text-5xl md:text-6xl font-bold animate-fadeInLeft">
                                Hi, This is{" "}
                                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                                    Soumi
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl text-gray-300">from India</span>
                            </h1>

                            {/* Typing Animation */}
                            <p className="text-2xl md:text-3xl animate-fadeInLeft delay-200">
                                I'm a{" "}
                                <ReactTyped
                                    className="font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent"
                                    strings={[
                                        "Flutter Developer",
                                        "Frontend Developer",
                                        "Android Developer",
                                        "Web Developer",
                                        "Software Developer"
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </p>
                        </div>

                        <p className="text-base md:text-2xl text-gray-300 leading-relaxed text-justify animate-fadeInLeft delay-400">
                            I'm <span className="font-bold">Soumi Samanta</span>, a passionate <span className="font-extrabold bg-gradient-to-r from-primary-400 text-pink-400 bg-clip-text text-transparent">Frontend & Flutter Developer</span> specializing in building responsive, user-friendly, and high-performance applications. I'm currently working at <span className="font-bold text-white">Aiinhome Technologies Pvt. Ltd.</span>, where I contribute to a live airline-based project with a strong focus on <span className="font-bold text-primary-400">Flutter UI development</span>, REST API integration, and seamless user experience design. I have hands-on experience in building real-world applications such as the <span className="font-bold text-accent-400">Aviio Airport Operations App</span> and the <span className="font-bold text-accent-400">Food Product Explorer App</span>, showcasing my ability to solve problems, design intuitive interfaces, and deliver production-ready features. My tech stack includes <span className="font-bold text-primary-300">Flutter, React.js, Redux, Tailwind CSS, Node.js, Express.js, MySQL, MongoDB</span>, and more, supported by strong communication and collaboration skills.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 animate-fadeInLeft delay-500">
                            <a
                                href="/contact"
                                className="btn-primary hover-lift"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="/projects"
                                className="px-6 py-3 rounded-lg font-semibold border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover-lift"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* Profile Image - Right Side */}
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 animate-fadeInRight">
                        <div className="relative">
                            {/* Gradient Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

                            {/* Profile Image */}
                            <img
                                src={pic}
                                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-white/10 shadow-glow-lg animate-float-slow hover:scale-105 transition-transform duration-500"
                                alt="Soumi Samanta"
                            />

                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Divider */}
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
            </div>
        </>
    );
}
