import React, { useState } from "react";
import "./Register.css";
import RegisterImage from "../Images/Register.jpg";

const Register = () => {
  const [name, setName] = useState("");       // Changed from username to name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate input fields
  const validateFields = () => {
    const newErrors = {};

    // Validate Name (instead of username)
    if (name.length < 5) {
      newErrors.name = "Name must be at least 5 characters long.";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Password
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate fields before making the API call
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    // Use "name" instead of "username"
    const registrationData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch("https://localhost:7069/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(result.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <h2 className="register-title">Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`register-input ${errors.name ? "input-error" : ""}`}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`register-input ${errors.email ? "input-error" : ""}`}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`register-input ${errors.password ? "input-error" : ""}`}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <button type="submit" className="register-button">
            Sign Up
          </button>
          {message && <p className="register-message">{message}</p>}
        </form>
      </div>

      <div className="info-section">
        <div className="info-container">
          <h3>Why Sign Up?</h3>
          <ul>
            <li>Access exclusive offers and updates.</li>
            <li>Stay informed about new features and events.</li>
            <li>Track your progress and achievements.</li>
          </ul>
          <h3>Conditions:</h3>
          <p>
            By signing up, you agree to provide accurate details. Your information will be securely
            stored and never shared without your consent.
          </p>
        </div>

        <div className="picture-container">
          <img src={RegisterImage} alt="Sign Up Info" className="info-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
