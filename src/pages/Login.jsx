import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(form.email, form.password);
            navigate('/'); // Redirect to homepage after login
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Invalid email or password.');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "var(--background)" }}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--primary-dark)" }}>Login to Your Account</h1>

                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--secondary)", focusRingColor: "var(--primary)" }}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="p-3 border rounded focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--secondary)", focusRingColor: "var(--primary)" }}
                    />

                    <button
                        type="submit"
                        className="bg-[var(--primary-dark)] text-white py-3 rounded hover:bg-[var(--primary)] transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Don't have an account? <a href="/register" style={{ color: "var(--primary)" }}>Register</a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;
