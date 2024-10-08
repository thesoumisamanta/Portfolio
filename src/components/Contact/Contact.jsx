import React, { useState, useEffect } from 'react';
import { init, send } from "@emailjs/browser";
import FlashMessage from './FlashMessage';
import EmailValidation from './EmailValidation';
import conf from '../../conf/conf';

export default function Contact() {

    // const {serviceId, templateId, userId} = conf

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

            <div className="relative flex items-top justify-center mt-10 mb-20 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold">Contact Me</h2>
                    <div className="mt-12 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-700 sm:rounded-lg">
                                <h1 className="text-3xl sm:text-4xl text-gray-200 font-extrabold tracking-tight">
                                    Get in touch:
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-400 mt-2">
                                    Fill in the form to connect with me
                                </p>
                                <div className="flex items-center mt-8 text-gray-300">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Burdwan, West Bengal, Pin - 713125
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-300">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +91 9883057054
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-300">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        samantasoumi10@gmail.com
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center" onSubmit={sendEmail}>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-white font-semibold focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <EmailValidation onValidEmail={handleValidEmail} />

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-100 mt-2 py-3 px-3 text-white rounded-lg bg-gray-600 border border-gray-400 font-semibold focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`md:w-32 bg-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 ${isFormValid ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'} transition ease-in-out duration-300`}
                                    disabled={!isFormValid}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}