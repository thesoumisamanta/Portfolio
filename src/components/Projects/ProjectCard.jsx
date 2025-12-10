import React from "react";

export default function ProjectCard({ title, description, link }) {
    return (
        <div className="group glass-card rounded-2xl p-6 m-4 max-w-sm w-full hover-lift hover:shadow-glow-lg transition-all duration-500 relative overflow-hidden">
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                    {title}
                </h2>

                {/* Description List */}
                <ul className="space-y-2 mb-6 flex-grow text-gray-300">
                    {description.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                            <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* View Button */}
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <button className="w-full btn-primary group/btn flex items-center justify-center gap-2">
                        <span>View Project</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </a>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    )
}
