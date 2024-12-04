// components/ContactUs.js
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css'; // Adjust the path based on your file structure

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here (e.g., API call or validation)
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out to us!");
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="container mt-5">
            <h2 align="left" className="mb-4">Contact Us</h2>
            <div className="row">
                {/* Contact Form Column */}
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'gold',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                            className="mt-3"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Additional Information Column */}
                <div className="col-md-6 mt-4">
                    <h3>Contact Information</h3>
                    <p><strong>Head of the Company and Main Coach:</strong> Alidsar Hatfield (You do not speak directly to the head.)</p>
                    <p><strong>Assistant Coach:</strong> Chad Ho</p>
                    <p><strong>Contact Details:</strong> 072 518 1135. You will contact him for further information.</p>
                    <p>This is also who you will sign off the contract to.</p>
                    <p><strong>Kit Sales Manager:</strong> Heather Ashley</p>
                    <p><strong>Contact Details:</strong> 083 609 5813. I have linked my details, Joshua Ashley. You will contact me for further information.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
