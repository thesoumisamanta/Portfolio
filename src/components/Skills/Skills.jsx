const categories = [
    {
        id: 1,
        title: "Languages",
        items: [
            { logo: "/assets/images/dart.webp", name: "Dart", proficiency: 85 },
            { logo: "/assets/images/javascript.png", name: "Javascript", proficiency: 80 },
            { logo: "/assets/images/python.webp", name: "Python", proficiency: 70 },
        ],
    },
    {
        id: 2,
        title: "Databases",
        items: [
            { logo: "/assets/images/mongodb.jpg", name: "MongoDB", proficiency: 80 },
            { logo: "/assets/images/mysql.png", name: "MySQL", proficiency: 70 },
        ],
    },
    {
        id: 3,
        title: "OS",
        items: [
            { logo: "/assets/images/windows.png", name: "Windows", proficiency: 80 },
            { logo: "/assets/images/linux.png", name: "Linux", proficiency: 70 },
            { logo: "/assets/images/android.webp", name: "Android", proficiency: 70 },
        ],
    },
    {
        id: 4,
        title: "State Mangaement Libraries",
        items: [
            { logo: "/assets/images/bloc.svg", name: "Bloc", proficiency: 92 },
            { logo: "/assets/images/redux.png", name: "Redux", proficiency: 82 },
            { logo: "/assets/images/getx.png", name: "GetX", proficiency: 85 },
        ],
    },
    {
        id: 5,
        title: "Platforms",
        items: [
            { logo: "/assets/images/github.jpg", name: "GitHub", proficiency: 90 },
            { logo: "/assets/images/firebase.png", name: "Firebase", proficiency: 95 },
            { logo: "/assets/images/appwrite.jpg", name: "Appwrite", proficiency: 85 },
        ],
    },
    {
        id: 6,
        title: "Technologies",
        items: [
            { logo: "/assets/images/html.png", name: "HTML5", proficiency: 95 },
            { logo: "/assets/images/css.jpg", name: "CSS3", proficiency: 80 },
            { logo: "/assets/images/bootstrap.jpg", name: "Bootstrap", proficiency: 80 },
            { logo: "/assets/images/tailwindcss.png", name: "Tailwind CSS", proficiency: 80 },
        ],
    },
    {
        id: 7,
        title: "Tools",
        items: [
            { logo: "/assets/images/vscode.jpg", name: "Visual Studio Code", proficiency: 95 },
            { logo: "/assets/images/antigravity.webp", name: "Antigravity", proficiency: 75 },
            { logo: "/assets/images/replit.png", name: "Replit", proficiency: 80 },
            { logo: "/assets/images/sublime.jpg", name: "Sublime Text", proficiency: 75 },
        ],
    },

    {
        id: 8,
        title: "Library & Frameworks",
        items: [
            { logo: "/assets/images/express.png", name: "Express Js", proficiency: 88 },
            { logo: "/assets/images/reactjs.png", name: "React Js", proficiency: 92 },
            { logo: "/assets/images/flask.png", name: "Flask", proficiency: 82 },
            { logo: "/assets/images/angular.png", name: "Angular Js", proficiency: 78 },
        ],
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
                    A comprehensive toolkit for building modern web applications
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map(({ id, title, items }, categoryIndex) => (
                    <div
                        key={id}
                        className={`glass-card rounded-2xl p-6 hover-lift hover:shadow-glow-lg transition-all duration-500 animate-scaleIn delay-${categoryIndex * 100}`}
                        style={{ animationDelay: `${categoryIndex * 100}ms` }}
                    >
                        {/* Category Title */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                {title}
                            </h2>
                            <div className="h-1 w-16 bg-gradient-primary rounded-full mt-2"></div>
                        </div>

                        {/* Skills Items */}
                        <div className="space-y-4">
                            {items.map(({ logo, name, proficiency }, index) => (
                                <div
                                    key={index}
                                    className="group relative glass-card rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover-lift"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                                    {/* Content */}
                                    <div className="relative flex items-center gap-4">
                                        {/* Icon */}
                                        <div className="relative flex-shrink-0">
                                            {/* Icon Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                                            <img
                                                src={logo}
                                                className="relative w-12 h-12 rounded-full border-2 border-white/20 object-cover group-hover:scale-110 transition-transform duration-300"
                                                alt={name}
                                            />
                                        </div>

                                        {/* Name and Progress Bar */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="font-semibold text-sm text-white group-hover:text-primary-300 transition-colors duration-300">
                                                    {name}
                                                </div>
                                                <span className="text-xs text-primary-400 font-bold">{proficiency}%</span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${proficiency}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Border on Hover */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                            padding: '1px',
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude'
                                        }}>
                                    </div>
                                </div>
                            ))}
                        </div>
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
