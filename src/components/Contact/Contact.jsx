import { useState } from "react";
import { init, send } from "@emailjs/browser";
import EmailValidation from "./EmailValidation";

export default function Contact() {
    const [messageStatus, setMessageStatus] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const [validEmail, setValidEmail] = useState('');

    const handleValidEmail = (email) => {
        setValidEmail(email);
    };

    // Directly passing the public key (User ID) here
    init("FwVueowY3CcfkdEH1");

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validEmail) {
            setMessageStatus("Please enter a valid email address.");
            setShowMessage(true);
            return;
        }

        const templateParams = {
            name: e.target.name.value,
            email: validEmail,
            message: e.target.message.value,
        };

        send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,   // Service ID from env
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,  // Template ID from env
            templateParams,                          // Template params
            "FwVueowY3CcfkdEH1"                   // Public key (User ID) directly added
        )
            .then((result) => {
                console.log(result.text);
                setMessageStatus("Message sent successfully!");
                setShowMessage(true); // Show success message
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setMessageStatus("Failed to send message.");
                setShowMessage(true); // Show error message
            });

        e.target.reset(); // Reset form after submission
    };

    return (
        <>
            {/* Flash Message */}
            {showMessage && (
                <div className="mt-16 fixed top-0 left-0 right-0 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
                    <strong className="font-bold">{messageStatus}</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowMessage(false)}>
                        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>Close</title>
                            <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
                        </svg>
                    </span>
                </div>
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
                            </div>

                            <form className="p-6 flex flex-col justify-center" onSubmit={sendEmail}>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                {/* <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div> */}

                                <EmailValidation onValidEmail={handleValidEmail} />

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="md:w-32 bg-blue-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-700 transition ease-in-out duration-300"
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
