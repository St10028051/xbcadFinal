import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import '../App.css'; // Ensure custom styles are defined

const AdminForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    // Update form field values
    const updateForm = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    // Handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Admin data:", form);
        // Add form submission logic here, such as sending data to a server

        // Reset form after submission if necessary
        setForm({
            username: '',
            email: '',
            password: '',
            address: ''
        });
    };

    // Redirect to the "Add Item" page
    const handleRedirect = () => {
        navigate('/additem'); // Adjust path if needed
    };

    // Redirect to the "Admin Login" page
    const handleAdminLoginRedirect = () => {
        navigate('/adminlogin'); // Adjust path if needed
    };

    return (
        <div className="form-container">
            <h3 align="center">Add Admin</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={form.username}
                        onChange={(e) => updateForm('username', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={form.password}
                        onChange={(e) => updateForm('password', e.target.value)}
                    />
                </div>
             

                <div className="button-container d-flex justify-content-center mt-3">
                    <input
                        type="submit"
                        value="Add Admin"
                        className="btn-gold mx-2"
                        style={{ color: "white" }} // White text color
                    />
                   
                    <input
                        type="button"
                        value="Admin Login"
                        className="btn-gold mx-2"
                        onClick={handleAdminLoginRedirect} // Redirect to Admin Login
                        style={{ color: "white" }} // White text color
                    />
                </div>
            </form>
        </div>
    );
};

export default AdminForm;
