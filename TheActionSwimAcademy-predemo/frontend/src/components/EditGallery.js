// components/EditNews.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css'; // Ensure custom styles are defined

const EditNews = () => {
    const location = useLocation();
    const article = location.state?.article; // Get article passed through navigation

    // State for the news item
    const [updatedArticle, setUpdatedArticle] = useState({
        title: '',
        content: '',
        imageUrl: ''
    });

    const navigate = useNavigate();

    // Initialize state with the article data on component mount
    useEffect(() => {
        if (article) {
            setUpdatedArticle({
                title: article.title,
                content: article.content,
                imageUrl: article.imageUrl
            });
        }
    }, [article]);

    // Update article fields
    const updateField = (field, value) => {
        setUpdatedArticle(prev => ({ ...prev, [field]: value }));
    };

    // Update the image
    const updateImage = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setUpdatedArticle(prev => ({ ...prev, imageUrl: reader.result })); // Update image with base64 data
        };
        if (file) {
            reader.readAsDataURL(file); // Convert file to base64
        }
    };

    // Form submission handler
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Article:", updatedArticle);
        // TODO: Add API calls here to save the updated article
        navigate('/news'); // Navigate back to news page
    };

    return (
        <div className="form-container" style={{ maxWidth: "900px", padding: "40px", marginTop: "10px" }}>
            <form onSubmit={onSubmit}>
                {/* News Editing Section */}
                <div className="section-container" style={{ padding: "20px" }}>
                    <h4>Edit News Article</h4>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={updatedArticle.title}
                            onChange={(e) => updateField('title', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            className="form-control"
                            id="content"
                            value={updatedArticle.content}
                            onChange={(e) => updateField('content', e.target.value)}
                            rows="5"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="image"
                            accept="image/*"
                            onChange={(e) => updateImage(e.target.files[0])}
                        />
                        {updatedArticle.imageUrl && (
                            <img
                                src={updatedArticle.imageUrl}
                                alt="Preview"
                                className="mt-2"
                                style={{
                                    width: "200px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "4px"
                                }}
                            />
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="button-container d-flex justify-content-center mt-3">
                    <input
                        type="submit"
                        value="Save Changes"
                        className="btn-gold mx-2"
                        style={{ color: "white", padding: "10px 20px", backgroundColor: "gold", border: "none" }}
                    />
                </div>
            </form>
        </div>
    );
};

export default EditNews;
