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
                <div className="space-y-4 mb-6 flex-grow text-gray-300">
                    {description.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-gray-100">{item.subtitle}:</h3>
                            <p className="text-sm ml-2">{item.details}</p>
                        </div>
                    ))}
                </div>

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
    );
}
