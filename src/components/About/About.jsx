import React from "react";
import pic from "../../../public/assets/me/me_professional.jpg";
import cv from '../../../public/assets/cv/Soumi - 18.10.2024.pdf';

export default function About() {

    return (
        <>
            <div name="About" className="min-h-[470px] max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-3">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="about-img flex-shrink-0">
                        <img
                            src={pic}
                            alt="About Me"
                            className="w-52 h-52 md:w-[400px] md:h-[400px] rounded-full animate-floatImage"
                        />
                    </div>
                    <div className="about-content mt-6 md:ml-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-center md:text-left">About Me</h2>
                        <p className="mt-4 mb-8 text-lg text-center md:text-left">
                            I am a dedicated Full-Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js) and a strong background in JavaScript, Python, C, and MySQL. I excel in delivering high-quality, scalable software solutions and have a passion for creating responsive and user-friendly web applications.
                        </p>
                        <ul className="list-none space-y-4 text-lg text-center md:text-left">
                            <li>
                                <strong className="text-yellow-400">Education and Academic Journey:</strong> I completed my undergraduate studies at Burdwan MUC Women's College with a CGPA of 9.28. I have also recently completed my master’s degree from The University of Burdwan.
                            </li>
                            <li>
                                <strong className="text-yellow-400">Passion and Interests:</strong> I enjoy designing web pages with innovative ideas and continuously seek to explore and expand my knowledge of web development.
                            </li>
                            <li>
                                <strong className="text-yellow-400">Career Goals:</strong> I aim to advance as a software developer, gaining experience with the latest technologies and contributing to impactful projects.
                            </li>
                        </ul>
                        <div className="text-center md:text-left">
                            <a
                                href={cv}
                                className="mt-8 bg-white font-bold text-blue-800 py-2 px-6 rounded hover:bg-blue-200 inline-block"
                                download
                            >
                                <span className="flex items-center justify-center">
                                    <img
                                        src="/assets/icon/download.png"
                                        alt="Download Icon"
                                        className="w-5 h-5 mr-2"
                                    />
                                    CV
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
