import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


export default function Projects (){

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/Projects.json')
                const data = await res.json()
                setProjects(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProjects()
    }, [])

    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}