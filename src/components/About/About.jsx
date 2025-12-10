
export default function About() {

    return (
        <>
            <div name="About" className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 flex items-center">
                <div className="glass-card rounded-3xl p-8 md:p-12 hover-lift">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                        {/* Content */}
                        <div className="about-content flex-1 space-y-6 animate-fadeIn delay-200">
                            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
                                About{" "}
                                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                    Me
                                </span>
                            </h2>

                            <ul className="space-y-4 text-base md:text-lg text-center md:text-left">
                                <li className="glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <strong className="text-primary-400">Education and Academic Journey:</strong>
                                            <p className="text-gray-300 mt-1">I completed my Bachelor’s degree in Computer Science from Burdwan M.U.C. Women’s College with an SGPA of 9.28 in 2022. After that, I completed my Master’s degree in Computer Science from The University of Burdwan with an SGPA of 8.50 in 2024.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift delay-100">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center">
                                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 7V6a3 3 0 013-3h0a3 3 0 013 3v1m-9 0h12a2 2 0 012 
       2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <strong className="text-secondary-400">Work Experience:</strong>
                                            <p className="text-gray-300 mt-1">I am currently working as a Flutter Developer at Aiinhome Technologies Pvt. Ltd., where I contribute to the Aviio Airport Operations project for Adani Airports. My role focuses on building responsive and user-friendly mobile interfaces, integrating REST APIs, and ensuring smooth data flow across modules. I work closely with cross-functional teams in an Agile environment to deliver production-level features, optimize performance, and maintain clean, reusable code for a large-scale, real-time airport operations platform.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift delay-100">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <strong className="text-secondary-400">Passion and Interests:</strong>
                                            <p className="text-gray-300 mt-1">I enjoy designing web pages with innovative ideas and continuously seek to explore and expand my knowledge of web development.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover-lift delay-200">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <strong className="text-accent-400">Career Goals:</strong>
                                            <p className="text-gray-300 mt-1">I aim to advance as a software developer, gaining experience with the latest technologies and contributing to impactful projects.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* Download CV Button */}
                            <div className="text-center md:text-left animate-fadeIn delay-300">
                                <a
                                    href="/assets/cv/Soumi_Samanta.pdf"
                                    className="inline-flex items-center gap-3 btn-primary hover-lift group"
                                    download
                                >
                                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Divider */}
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
            </div>
        </>
    );
}
