import React, { useState, useEffect } from 'react';
import { init, send } from "@emailjs/browser";
import FlashMessage from './FlashMessage';
import EmailValidation from './EmailValidation';
import conf from '../../conf/conf';

export default function Contact() {

    const [messageStatus, setMessageStatus] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState("success");
    const [validEmail, setValidEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        init(import.meta.env.VITE_EMAIL_USER_ID);
    }, []);

    useEffect(() => {
        setIsFormValid(validEmail && name && message);
    }, [validEmail, name, message]);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            setMessageStatus("Please fill all fields correctly.");
            setMessageType("error");
            setShowMessage(true);
            return;
        }

        const templateParams = {
            name: name,
            email: validEmail,
            message: message,
        };

        send(
            conf.serviceId,
            conf.templateId,
            templateParams,
            conf.userId
        )
            .then((result) => {
                console.log(result.text);
                setMessageStatus("Message sent successfully!");
                setMessageType("success");
                setShowMessage(true);
                resetForm();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setMessageStatus("Failed to send message.");
                setMessageType("error");
                setShowMessage(true);
            });
    };

    const resetForm = () => {
        setName('');
        setValidEmail('');
        setMessage('');
    };

    const handleValidEmail = (email) => {
        setValidEmail(email);
    };

    return (
        <>
            {showMessage && (
                <FlashMessage
                    message={messageStatus}
                    type={messageType}
                    onClose={() => setShowMessage(false)}
                />
            )}

            <div className="min-h-screen max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Let's connect and build something amazing together
                    </p>
                </div>

                {/* Contact Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="glass-card rounded-3xl p-8 space-y-8 animate-fadeInLeft">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                                    Get in touch
                                </h2>
                                <p className="text-lg text-gray-300">
                                    Fill in the form to connect with me
                                </p>
                            </div>

                            {/* Contact Items */}
                            <div className="space-y-6">
                                {/* Location */}
                                <div className="flex items-start gap-4 glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Address</h3>
                                        <p className="text-gray-300">Burdwan, West Bengal<br />Pin - 713125</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                                        <p className="text-gray-300">+91 9883057054</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 glass-card p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email</h3>
                                        <p className="text-gray-300">samantasoumi10@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card rounded-3xl p-8 animate-fadeInRight">
                            <form className="space-y-6" onSubmit={sendEmail}>
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-300">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input-glass text-white placeholder:text-gray-400"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <EmailValidation onValidEmail={handleValidEmail} />

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your message here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows="5"
                                        className="input-glass text-white placeholder:text-gray-400 resize-none"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`w-full btn-primary group/btn flex items-center justify-center gap-2 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    disabled={!isFormValid}
                                >
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}