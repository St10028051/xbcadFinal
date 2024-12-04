// components/AdminEditMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure that your custom styles are properly imported

const AdminEditMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="form-container mt-5">
            <h2 className="text-center mb-4">Admin Edit Menu</h2>
            <div className="button-container">
                <button
                    className="btn btn-gold"
                    onClick={() => navigate('/editachievements')}
                >
                    Edit Achievements
                </button>
                <button
                    className="btn btn-gold"
                    onClick={() => navigate('/editgallery')}
                >
                    Edit Gallery
                </button>
                <button
                    className="btn btn-gold"
                    onClick={() => navigate('/editnews')}
                >
                    Edit News
                </button>
                <button
                    className="btn btn-gold"
                    onClick={() => navigate('/additem')}
                >
                    Add Item
                </button>
            </div>
        </div>
    );
};

export default AdminEditMenu;
