import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import axios from "axios";

const disposableEmailDomains = ['tempmail.com', 'temp-mail.org', '10minutemail.com', 'guerrillamail.com'];

export default function EmailValidation({ onValidEmail }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValidating, setIsValidating] = useState(false);

    const validateEmail = async (email) => {
        setIsValidating(true);
        setError('');

        if (!isEmail(email)) {
            setError('Please enter a valid email address');
            onValidEmail('');
            setIsValidating(false);
            return;
        }

        const domain = email.split('@')[1];
        if (disposableEmailDomains.includes(domain)) {
            setError('Please use a non-disposable email address');
            onValidEmail('');
            setIsValidating(false);
            return;
        }

        try {
            const response = await axios.get(`https://dns.google/resolve?name=${domain}&type=MX`);
            if (!response.data.Answer) {
                setError('Please enter a valid email address');
                onValidEmail('');
                setIsValidating(false);
                return;
            }
        } catch (error) {
            console.error('Error checking MX records:', error);
        }

        setError('');
        onValidEmail(email);
        setIsValidating(false);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError(''); 
        validateEmail(e.target.value); 
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-white font-semibold focus:border-blue-500 focus:outline-none"
                required
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
}
