import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'; // Import the CSS file for styling
import Footer from "../Components/Footer/Footer";

export function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

    async function handleSignUp(e) {
        e.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setLoading(false);
                console.log(user);
                navigate('/login');
            })
            .catch((error) => {
                setLoading(false);
                setError("Error signing up. Please try again.");
                console.log(error);
            });
    }

    return (
        <>
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp} className="signup-form">
                <input className="signup-input" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input className="signup-input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <Footer />
        </>
    );
}
