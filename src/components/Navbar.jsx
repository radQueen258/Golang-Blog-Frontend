import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md" style={{ backgroundColor: "var(--primary-dark)", color: "white" }}>
            <div className="text-xl font-bold">
                <Link to="/" className="hover:text-[var(--secondary)] transition">BlogAPI</Link>
            </div>

            <div className="flex gap-6 items-center text-sm font-semibold">
                <Link to="/" className="hover:text-[var(--secondary)] transition">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/profile" className="hover:text-[var(--secondary)] transition">Profile</Link>
                        <button
                            onClick={handleLogout}
                            className="bg-[var(--secondary)] text-[var(--primary-dark)] px-4 py-2 rounded hover:bg-[var(--primary)] hover:text-white transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hover:text-[var(--secondary)] transition">Login</Link>
                        <Link to="/register" className="hover:text-[var(--secondary)] transition">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
