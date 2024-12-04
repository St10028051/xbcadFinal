// components/News.js
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

const News = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Latest News</h2>
            <div className="row">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

const ArticleCard = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="col-12 mb-4">
            <div className="card h-100 d-flex flex-row">
                {/* Image on the left side */}
                <img 
                    src={article.imageUrl} 
                    className="card-img-left" 
                    alt={article.title} 
                    style={{ width: '150px', height: 'auto', marginRight: '15px' }} 
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">
                            {isExpanded ? article.content : `${article.content.substring(0, 50)}...`} {/* Show truncated content */}
                        </p>
                        <button className="btn btn-link" onClick={toggleExpand}>
                            {isExpanded ? "See Less" : "See More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
