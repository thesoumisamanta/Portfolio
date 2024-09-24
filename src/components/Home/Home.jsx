import React from "react";
import { ReactTyped } from "react-typed";
import pic from "../../../public/assets/me/me_professional.jpg";

export default function Home() {
    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-5">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <div className="flex flex-col space-y-2">
                            <h1 className="text-6xl">
                                Hi, This is <span className="text-red-600">Soumi</span><br />from India
                            </h1>
                            <p className="text-2xl md:text-2xl">
                                I'm a{" "}
                                <ReactTyped
                                    className="text-red-700 font-bold"
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
                        <br />
                        <p className="text-md md:text-md text-justify">
                            A passionate Full-Stack Developer with advanced expertise in the MERN stack (MongoDB, Express, React, Node.js), complemented by strong skills in JavaScript, Python, and MySQL. Proven ability to build and enhance dynamic web applications, including a React-based hackathon management platform and a responsive news app with real-time updates. Designed and implemented a document-based question-answering system using the MERN stack to analyze and interact with PDF and DOCX files. Committed to delivering scalable, high-quality software solutions and solving complex challenges with creativity and efficiency.
                        </p>
                        <br />
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img
                            src={pic}
                            className="rounded-full md:w-[400px] md:h-[400px] w-full shadow-[0px_0px_30px_yellow] animate-floatImage"
                            alt="Soumi"
                        />
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
}
