import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/Projects.json');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    My{" "}
                    <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Explore my portfolio of innovative web applications and solutions
                </p>
            </div>

            {/* Projects Grid */}
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <div key={index} className="animate-scaleIn" style={{ animationDelay: `${index * 100}ms` }}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>

            {/* Decorative Divider */}
            <div className="mt-20">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
            </div>
        </div>
    );
}
