import React from "react";
import java from "../assets/images/java.png";
import python from "../assets/images/python.webp";
import mongoDB from "../assets/images/mongodb.jpg";
import express from "../assets/images/express.png";
import reactjs from "../assets/images/reactjs.png";
import nodejs from "../assets/images/node.png";
import html5 from "../assets/images/html.png";
import css3 from "../assets/images/css.jpg";
import mysql from "../assets/images/mysql.png";
import bootstrap from "../assets/images/bootstrap.jpg";
import tailwind from "../assets/images/tailwindcss.png";
import flask from "../assets/images/flask.png";
import redux from "../assets/images/redux.png";
import angular from "../assets/images/angular.png";
import vscode from "../assets/images/vscode.jpg";
import replit from "../assets/images/replit.png";
import sublime from "../assets/images/sublime.jpg";
import github from "../assets/images/github.jpg";
import appwrite from "../assets/images/appwrite.jpg";



const categories = [
    {
        id: 1,
        title: "Languages",
        items: [
            { logo: java, name: "JavaScript" },
            { logo: python, name: "Python" },
        ],
    },
    {
        id: 2,
        title: "Databases",
        items: [
            { logo: mongoDB, name: "MongoDB" },
            { logo: mysql, name: "MySQL" },
        ],
    },
    {
        id: 3,
        title: "Technologies",
        items: [
            { logo: html5, name: "HTML5" },
            { logo: css3, name: "CSS3" },
            { logo: bootstrap, name: "Bootstrap" },
            { logo: tailwind, name: "Tailwind CSS" },
        ],
    },
    {
        id: 4,
        title: "Tools",
        items: [
            { logo: vscode, name: "Visual Studio Code" },
            { logo: replit, name: "Replit" },
            { logo: sublime, name: "Sublime Text" },
            { logo: github, name: "GitHub" },
            { logo: appwrite, name: "Appwrite" },
        ],
    },
    {
        id: 4,
        title: "Frameworks",
        items: [
            { logo: express, name: "Express Js" },
            { logo: reactjs, name: "React Js" },
            { logo: nodejs, name: "Node Js" },
            { logo: flask, name: "Flask" },
            { logo: redux, name: "Redux" },
            { logo: angular, name: "Angular Js" },
        ],
    },
];

export default function Skills() {
    return (
        <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 mb-5">
            <h1 className="text-3xl font-bold mb-5 text-center">Skills</h1>

            <div className="flex flex-wrap justify-center space-y-6 md:space-x-6 md:space-y-0 mb-6 px-4">
                {categories.slice(0, 3).map(({ id, title, items }) => (
                    <div
                        key={id}
                        className="border-[2px] rounded-lg shadow-lg p-4 hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
                        style={{ width: `min(100%, ${items.length * 130}px)` }}  
                    >
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {items.map(({ logo, name }, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center border-[1px] rounded-lg p-3 hover:bg-gray-950 hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={logo}
                                        className="w-[60px] h-[60px] p-1 rounded-full border-[1px]"
                                        alt={name}
                                    />
                                    <div className="mt-2 text-center">
                                        <div className="font-bold text-sm">{name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-x-6 md:space-y-0">
                {categories.slice(3, 5).map(({ id, title, items }) => (
                    <div
                        key={id}
                        className="border-[2px] rounded-lg shadow-lg p-4 hover:bg-gray-900 hover:scale-105 transition-transform duration-300 flex-shrink-0"
                        style={{ width: `min(100%, ${Math.max(items.length * 130, 200)}px)` }}  
                    >
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {items.map(({ logo, name }, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center border-[1px] rounded-lg p-3 hover:bg-gray-950 hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={logo}
                                        className="w-[60px] h-[60px] p-1 rounded-full border-[1px]"
                                        alt={name}
                                    />
                                    <div className="mt-2 text-center">
                                        <div className="font-bold text-sm">{name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
