// components/EditNews.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'; // Ensure this path is correct

// Sample articles data
const articles = [
    {
        id: 1,
        title: "Article 1",
        content: "This is the content of the first article. It provides an overview of our mission and values.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Article 2",
        content: "This is the content of the second article. It discusses our recent projects and achievements.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Article 3",
        content: "This is the content of the third article. It highlights the team and their contributions.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Article 4",
        content: "This article provides insights into our community outreach programs and their impact.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        title: "Article 5",
        content: "This article explores the future goals of our organization and the steps we are taking to achieve them.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 6,
        title: "Article 6",
        content: "This article discusses the importance of teamwork and how it contributes to our success.",
        imageUrl: "https://via.placeholder.com/150"
    },
];

const EditNews = () => {
    const [articlesState, setArticlesState] = useState(articles);

    // Update article field
    const updateArticle = (id, field, value) => {
        setArticlesState(prevArticles =>
            prevArticles.map(article =>
                article.id === id ? { ...article, [field]: value } : article
            )
        );
    };

    // Update article image
    const updateImage = (id, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setArticlesState(prevArticles =>
                prevArticles.map(article =>
                    article.id === id ? { ...article, imageUrl: reader.result } : article
                )
            );
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Save changes
    const saveChanges = () => {
        console.log("Changes saved!", articlesState);
        alert("Changes saved successfully!");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit News Articles</h2>
            <div className="row">
                {articlesState.map(article => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        updateArticle={updateArticle}
                        updateImage={updateImage}
                    />
                ))}
            </div>
            {/* Submit Button */}
            <div className="text-center mt-4">
                <button
                    className="btn mx-2 btn-gold"
                    onClick={saveChanges}
                    style={{ color: "white", padding: "10px 20px", backgroundColor: "gold", border: "none", borderRadius: "5px" }} // Gold button styling
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

// Article card component for individual articles
const ArticleCard = ({ article, updateArticle, updateImage }) => {
    return (
        <div className="col-12 mb-4">
            <form className="card h-100">
                <div className="card-body d-flex">
                    <div className="me-3"> {/* Add margin to separate image and text */}
                        <input
                            type="file"
                            className="form-control-file"
                            accept="image/*"
                            onChange={(e) => updateImage(article.id, e.target.files[0])}
                        />
                        {article.imageUrl && (
                            <img
                                src={article.imageUrl}
                                alt="Preview"
                                className="mt-2"
                                style={{
                                    width: "150px", // Fixed width for consistent layout
                                    height: "auto",
                                    objectFit: "cover",
                                    borderRadius: "4px"
                                }}
                            />
                        )}
                    </div>
                    <div className="flex-grow-1">
                        <h5 className="card-title">
                            <input
                                type="text"
                                className="form-control"
                                value={article.title}
                                onChange={(e) => updateArticle(article.id, 'title', e.target.value)}
                                placeholder="Article Title"
                            />
                        </h5>
                        <textarea
                            className="form-control mb-2"
                            value={article.content}
                            onChange={(e) => updateArticle(article.id, 'content', e.target.value)}
                            rows="5"
                            placeholder="Article Content"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditNews;
