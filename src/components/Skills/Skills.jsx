const skillCategories = [
    {
        id: 1,
        title: "Languages",
        skills: [
            { name: "Dart", logo: "/assets/images/dart.webp" },
            { name: "Kotlin" },
            { name: "JavaScript", logo: "/assets/images/javascript.png" },
        ],
        usage:
            "I use Dart as my primary language to build cross-platform mobile applications with Flutter across IKK Workspace, Aviio, and Vagabond. I use Kotlin for native Android development alongside Jetpack Compose, and JavaScript to build backend REST APIs and real-time services with Node.js and Express."
    },
    {
        id: 2,
        title: "Frameworks & UI Toolkits",
        skills: [
            { name: "Flutter", logo: "/assets/images/flutter.webp" },
            { name: "Jetpack Compose" },
            { name: "Express", logo: "/assets/images/express.png" },
        ],
        usage:
            "I use Flutter to build responsive, production-grade mobile interfaces for Aviio (AAHL Mobile App), IKK Workspace, and Vagabond. I work with Jetpack Compose for modern declarative Android UI, and Express to develop scalable RESTful backend endpoints, JWT authentication, and media APIs."
    },
    {
        id: 3,
        title: "State Management",
        skills: [
            { name: "BLoC", logo: "/assets/images/bloc.svg" },
            { name: "GetX", logo: "/assets/images/getx.png" },
            { name: "Provider" },
            { name: "Riverpod" },
        ],
        usage:
            "I use BLoC extensively in enterprise and social apps like IKK Workspace and Vagabond to separate business logic from UI and manage complex async states cleanly. I also apply GetX, Provider, and Riverpod across mobile modules for reactive state updates, dependency handling, and predictable UI rendering."
    },
    {
        id: 4,
        title: "Databases",
        skills: [
            { name: "SQLite" },
            { name: "MySQL", logo: "/assets/images/mysql.png" },
            { name: "MongoDB", logo: "/assets/images/mongodb.jpg" },
        ],
        usage:
            "I use SQLite in IKK Workspace for reliable offline caching so workforce modules like attendance and timesheets stay functional without network connectivity. I use MongoDB to store profiles, posts, 24-hour stories, and real-time chat messages in Vagabond, and MySQL for structured relational data."
    },
    {
        id: 5,
        title: "APIs & Cloud",
        skills: [
            { name: "RESTful APIs" },
            { name: "Firebase", logo: "/assets/images/firebase.png" },
        ],
        usage:
            "I integrate RESTful APIs across Aviio, IKK Workspace, and Vagabond to power smooth, real-time data flow between Flutter frontends and backend services. I use Firebase—including Firebase Cloud Messaging and Crashlytics—for instant push notifications and production crash monitoring."
    },
    {
        id: 6,
        title: "Architecture",
        skills: [
            { name: "Clean Architecture" },
            { name: "Modular Architecture" },
        ],
        usage:
            "I apply Clean Architecture and Modular Architecture in production apps such as IKK Workspace and Vagabond to maintain strict separation across data, domain, and presentation layers. Combined with GetIt dependency injection and dev/prod configurations, this keeps large codebases scalable and testable."
    },
    {
        id: 7,
        title: "Version Control",
        skills: [
            { name: "Git", logo: "/assets/images/git.png" },
            { name: "GitHub", logo: "/assets/images/github.jpg" },
        ],
        usage:
            "I use Git and GitHub daily for branching, code reviews, and release management across Agile workflows at IntersoftKK and Aiinhome Technologies. They streamline collaboration with cross-functional teams and ensure clean, traceable production deployments."
    },
    {
        id: 8,
        title: "Operating Systems",
        skills: [
            { name: "Windows", logo: "/assets/images/windows.png" },
            { name: "Linux", logo: "/assets/images/linux.png" },
            { name: "Mac" },
        ],
        usage:
            "I develop, test, and ship Flutter and Android applications across Windows, Linux, and macOS environments. Working across all three operating systems lets me manage cross-platform builds, device emulators, and environment-specific configurations smoothly."
    },
];

export default function Skills() {
    return (
        <div name="Skills" className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    My{" "}
                    <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Core mobile development technologies and architectures I use in production applications
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                {skillCategories.map(({ id, title, skills, usage }, categoryIndex) => (
                    <div
                        key={id}
                        className="group glass-card rounded-2xl p-6 md:p-8 hover-lift hover:shadow-glow-lg transition-all duration-500 relative overflow-hidden animate-scaleIn"
                        style={{ animationDelay: `${categoryIndex * 100}ms` }}
                    >
                        {/* Hover Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full gap-5">
                            {/* Category Title */}
                            <div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                                    {title}
                                </h2>
                                <div className="h-1 w-16 bg-gradient-primary rounded-full mt-2"></div>
                            </div>

                            {/* Skill Chips */}
                            <div className="flex flex-wrap gap-3">
                                {skills.map(({ name, logo }, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-400/40 transition-all duration-300"
                                    >
                                        {logo ? (
                                            <img
                                                src={logo}
                                                alt={name}
                                                className="w-6 h-6 rounded-full object-cover border border-white/20"
                                            />
                                        ) : (
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-400"></span>
                                        )}
                                        <span className="text-sm font-medium text-gray-100">{name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* How & Where Used */}
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5 mt-auto">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {usage}
                                </p>
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
