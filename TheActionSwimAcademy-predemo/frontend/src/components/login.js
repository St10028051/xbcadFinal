import React, { useState } from 'react';
import './Login.css'; 
import LoginImage from '../Images/Login1.jpg';

const Login = () => {
    const [email, setEmail] = useState('');   // Change username to email
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Both fields are required.');
            return;
        }

        try {
            const response = await fetch("https://localhost:7069/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email instead of username
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Login successful!');
                localStorage.setItem('token', data.token);
                setEmail('');
                setPassword('');
                // If you want to redirect:
                // window.location.href = '/dashboard';
            } else {
                setMessage(data.message || 'Invalid email or password.');
            }
        } catch (error) {
            setMessage('Error connecting to the server.');
        }
    };

    const handleForgotPassword = () => {
        alert('Forgot Password functionality is under development.');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleLogin} className="login-form">
                    <h2 className="login-title">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                    <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
                    {message && <p className="login-message">{message}</p>}
                </form>
            </div>

            <div className="info-section">
                <div className="info-container">
                    <h3>How to Login?</h3>
                    <ul>
                        <li>Use your registered email and password.</li>
                        <li>Ensure credentials are correct and case-sensitive.</li>
                        <li>If you face issues, contact support.</li>
                    </ul>
                    <h3>Interactive Tip:</h3>
                    <p>
                        Click on "Forgot Password?" to reset your password instantly.
                        Always keep your account details secure!
                    </p>
                </div>
                <div className="picture-container">
                    <img src={LoginImage} alt="Login Tip" className="info-image" />
                </div>
            </div>
        </div>
    );
};

export default Login;
