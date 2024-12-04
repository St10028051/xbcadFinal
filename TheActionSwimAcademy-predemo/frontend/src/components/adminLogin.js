// components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    // Update input fields
    const updateField = (field, value) => {
        setCredentials(prev => ({ ...prev, [field]: value }));
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/account/admin-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: credentials.username, // The backend expects "email" for username
                    password: credentials.password
                })
            });

            if (response.ok) {
                const data = await response.json();
                // Save JWT token in localStorage
                localStorage.setItem('token', data.Token);

                // Redirect to the AdminEditMenu page on successful login
                navigate('/adminEditMenu');
            } else {
                const error = await response.text();
                alert(`Login failed: ${error}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="form-container p-4" style={formStyle}>
                <h3 className="text-center mb-4">Admin Login</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username" style={labelStyle}>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={credentials.username}
                            onChange={(e) => updateField('username', e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" style={labelStyle}>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={credentials.password}
                            onChange={(e) => updateField('password', e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-container d-flex justify-content-center">
                        <button type="submit" className="btn" style={buttonStyle}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Styles for the form container, button, and labels
const formStyle = {
    width: "80%",
    maxWidth: "400px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left", // Align text in the form to the left
};

const buttonStyle = {
    backgroundColor: '#FFD700', // Gold color
    color: 'white',             // White text
    border: 'none',             // No border
    padding: '10px 20px',       // Padding for the button
    fontSize: '16px',           // Font size
    borderRadius: '5px',        // Rounded corners
};

const labelStyle = {
    display: "block",            // Make the label a block element
    marginBottom: "0.5rem",      // Space between label and input
    textAlign: "left"            // Ensure label text is left aligned
};

export default AdminLogin;

