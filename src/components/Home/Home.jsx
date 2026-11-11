import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <>
            <div
                name="Home"
                className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 flex items-center">
                <div className="flex flex-col md:flex-row items-center w-full gap-12 md:gap-20">
                    {/* Text Content - Left Side */}
                    <div className="md:w-[80%] space-y-6 order-2 md:order-1">
                        <div className="flex flex-col space-y-4">
                            {/* Greeting with Animation */}
                            <h1 className="text-5xl md:text-6xl font-bold animate-fadeInLeft">
                                Hi, This is{" "}
                                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                                    <span className="text-pink-400">Soumi</span>
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl text-gray-300">from India</span>
                            </h1>

                            {/* Typing Animation */}
                            <p className="text-2xl md:text-3xl animate-fadeInLeft delay-200">
                                I&apos;m a{" "}
                                <ReactTyped
                                    className="font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent"
                                    strings={[
                                        "Flutter Developer",
                                        "Android Developer",
                                        "Mobile Application Developer"
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </p>
                        </div>

                        <p className="text-base md:text-2xl text-gray-300 leading-relaxed text-justify animate-fadeInLeft delay-400">
                            I&apos;m <span className="font-bold">Soumi Samanta</span>, a passionate <span className="font-extrabold bg-gradient-to-r from-primary-400 bg-clip-text text-transparent"><span className="text-pink-400">Mobile Application &amp; Flutter Developer</span></span> with almost 2 years of experience building responsive, scalable, and user-friendly mobile applications using <span className="font-bold text-primary-300">Flutter, Dart, REST APIs, Firebase</span>, and state management solutions (<span className="font-bold text-primary-400">BLoC, GetX, Provider, Riverpod</span>). Currently working as a Flutter Developer at <span className="font-bold text-white">IntersoftKK Pvt. Ltd.</span>, I am developing the production-ready <span className="font-bold text-accent-400">IKK Workspace</span> Enterprise Workforce Management Application using Clean Architecture, BLoC, and real-time integrations. Previously, as an Associate Developer at <span className="font-bold text-white">Aivista &amp; Aiinhome Technologies Pvt. Ltd.</span>, I contributed to the live <span className="font-bold text-accent-400">Aviio (AAHL Mobile App)</span> through Flutter UI development and REST API integration, and I also built <span className="font-bold text-accent-400">Vagabond</span>, a social travel-sharing mobile app powered by Flutter, Node.js, Express, and MongoDB.
                        </p>

                        {/* CTA Button */}
                        <div className="flex gap-4 animate-fadeInLeft delay-500">
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

                    {/* Profile Image - Right Side */}
                    <div className="md:w-1/2 flex justify-end order-1 md:order-2 animate-fadeInRight">
                        <div className="relative">
                            {/* Gradient Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

                            {/* Profile Image */}
                            <img
                                src="/assets/me/me.jpg"
                                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-white/10 shadow-glow-lg animate-float-slow hover:scale-105 transition-transform duration-500"
                                alt="Soumi Samanta"
                            />


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
