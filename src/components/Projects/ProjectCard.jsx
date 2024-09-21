import React from "react";

export default function ProjectCard({title, description, link}){
    return (
        <div className="bg-blue-950 shadow-lg rounded-lg p-5 m-4 w-[25rem] h-90 flex flex-col justify-between hover:bg-blue-900 hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <ul className="list-disc list-inside mb-4">
                {description.map((point, index) => (
                    <li key={index} className="mb-1">{point}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500 hover:scale-105 transition-transform duration-300">
                    View 
                </button>
            </a>
        </div>
    )
}