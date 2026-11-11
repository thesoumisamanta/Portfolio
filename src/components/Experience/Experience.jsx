const experiences = [
    {
        company: "IntersoftKK Pvt. Ltd.",
        role: "Flutter Developer",
        duration: "2026 – Present",
        isCurrent: true,
        projectName: "IKK Workspace (Enterprise Workforce Management App)",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.intersoftkk.workspace",
        highlights: [
            "Developing a production-ready Enterprise Workforce Management App using Flutter, Clean Architecture, BLoC state management, and GetIt for dependency injection.",
            "Implementing key modules including Attendance & Location Tracking, Timesheets, Leave Management, Expense Reimbursements, and Performance Tracking, with document scanning and digital signatures.",
            "Integrating REST APIs, Socket.IO, Firebase Cloud Messaging, SQLite offline caching, secure storage, and Firebase Crashlytics, with separate development and production configurations."
        ],
        technologies: [
            "Flutter",
            "Clean Architecture",
            "BLoC",
            "GetIt",
            "REST APIs",
            "Socket.IO",
            "Firebase Cloud Messaging",
            "SQLite",
            "Firebase Crashlytics"
        ]
    },
    {
        company: "Aivista & Aiinhome Technologies Pvt. Ltd.",
        role: "Associate Developer",
        duration: "Dec, 2024 – Jan, 2026",
        isCurrent: false,
        projectName: "Aviio (AAHL Mobile App)",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.adani.aahluc",
        highlights: [
            "Worked on a live airline-based project as a Flutter frontend developer.",
            "Designed and implemented user-friendly and responsive mobile UI aligned with industry-standard UX principles.",
            "Integrated RESTful APIs to enable seamless data flow between frontend and backend.",
            "Collaborated in an Agile environment with cross-functional teams to deliver features in production."
        ],
        technologies: [
            "Flutter",
            "Dart",
            "RESTful APIs",
            "Responsive UI/UX",
            "Agile"
        ]
    }
];

export default function Experience() {
    return (
        <div className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Work{" "}
                    <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    My professional journey building scalable, production-ready mobile applications
                </p>
            </div>

            {/* Experience Cards (Row-Wise) */}
            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group glass-card rounded-2xl p-6 md:p-8 w-full hover-lift hover:shadow-glow-lg transition-all duration-500 relative overflow-hidden animate-scaleIn"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Gradient Background on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            {/* Top Row: Company, Role, Duration & Play Store Button */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 border-b border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                                                {exp.company}
                                            </h2>
                                            {exp.isCurrent && (
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-lg font-medium text-gray-200 mt-0.5">{exp.role}</p>
                                        <p className="text-sm text-primary-300 mt-1 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                            <span>{exp.duration}</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-gray-300">{exp.projectName}</span>
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={exp.playStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0"
                                >
                                    <button className="w-full md:w-auto btn-primary group/btn flex items-center justify-center gap-2">
                                        <span>View on Play Store</span>
                                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>

                            {/* Responsibilities & Contributions */}
                            <ul className="space-y-3 text-gray-300">
                                {exp.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/5">
                                        <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-primary-300 border border-primary-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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

