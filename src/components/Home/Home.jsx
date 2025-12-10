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
                                        "Full Stack Developer",
                                        "Frontend Developer",
                                        "Backend Developer",
                                        "Web Developer",
                                        "Software Developer"
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </p>
                        </div>

                        {/* Bio Description */}
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify animate-fadeInLeft delay-400">
                            A passionate Full-Stack Developer with advanced expertise in the MERN stack (MongoDB, Express, React, Node.js), complemented by strong skills in JavaScript, Python, and MySQL. Proven ability to build and enhance dynamic web applications, including a React-based hackathon management platform and a responsive news app with real-time updates. Designed and implemented a document-based question-answering system using the MERN stack to analyze and interact with PDF and DOCX files. Committed to delivering scalable, high-quality software solutions and solving complex challenges with creativity and efficiency.
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

                            {/* Decorative Rings */}
                            <div className="absolute -inset-4 border-2 border-primary-500/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute -inset-8 border-2 border-accent-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
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
