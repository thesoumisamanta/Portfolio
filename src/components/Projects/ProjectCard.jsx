export default function ProjectCard({ title, description, link }) {
    return (
        <div className="group glass-card rounded-2xl p-6 md:p-8 w-full hover-lift hover:shadow-glow-lg transition-all duration-500 relative overflow-hidden">
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-5">
                {/* Top Row: Title & Play Store Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/10">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                        {title}
                    </h2>

                    <a href={link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <button className="w-full sm:w-auto btn-primary group/btn flex items-center justify-center gap-2">
                            <span>{link?.includes("play.google.com") ? "View on Play Store" : "View Project"}</span>
                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>

                {/* Horizontal Description Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                    {description.map((item, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5">
                            <h3 className="font-semibold text-gray-100 mb-1.5">{item.subtitle}</h3>
                            <p className="text-sm leading-relaxed">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
}
