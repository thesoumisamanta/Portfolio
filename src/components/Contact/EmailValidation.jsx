import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function EmailValidation({ onValidEmail }) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValidating, setIsValidating] = useState(false);

    const validateEmail = async (email) => {
        if (!isEmail(email)) {
            setError('Please enter a valid email address');
            return false;
        }

        setIsValidating(true);
        try {
            const apiKey = import.meta.env.VITE_ZEROBOUNCE_API_KEY;
            if (!apiKey) {
                console.error('ZeroBounce API key is not set');
                setError('Unable to validate email at this time');
                return false;
            }

            const response = await fetch(`https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`);
            const data = await response.json();

            if (data.status === 'valid') {
                setError('');
                return true;
            } else {
                setError('Please enter a valid email address');
                return false;
            }
        } catch (error) {
            console.error('Error validating email:', error);
            setError('Unable to validate email at this time');
            return false;
        } finally {
            setIsValidating(false);
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const handleBlur = async () => {
        const isValid = await validateEmail(email);
        if (isValid) {
            onValidEmail(email);
        }
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-gray-600 border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                required
            />
            {isValidating && <p className="text-yellow-500 mt-1">Validating email...</p>}
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
};