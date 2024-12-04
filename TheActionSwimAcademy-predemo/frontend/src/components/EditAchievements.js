import React, { useState } from 'react';
import '../App.css';

const Achievements = () => {
    const [achievements, setAchievements] = useState([
        {
            year: 2023,
            title: "Gold Medal in 4x100m Relay at the Aquatic World Championships",
            imageUrl: "https://via.placeholder.com/150",
            description: "This achievement showcases the team's speed and coordination, leading to a gold medal finish.",
        },
        {
            year: 2022,
            title: "Silver Medal in 200m Freestyle at the National Championships",
            imageUrl: "https://via.placeholder.com/150",
            description: "An impressive performance in the national championship, securing a silver medal.",
        },
        {
            year: 2021,
            title: "Bronze Medal in 100m Butterfly at the Junior Olympics",
            imageUrl: "https://via.placeholder.com/150",
            description: "A remarkable achievement at the Junior Olympics, showcasing talent at a young age.",
        },
        {
            year: 2024,
            title: "Multiple swimmers qualified for the 2024 Olympic Games",
            imageUrl: "https://via.placeholder.com/150",
            description: "A historic moment for the team as multiple swimmers qualify for the upcoming Olympics.",
        },
        {
            year: "Top Club",
            title: "Top club at the regional championships for three consecutive years",
            imageUrl: "https://via.placeholder.com/150",
            description: "Recognition as the top club reflects consistent excellence in performance over three years.",
        },
        {
            year: 2020,
            title: "Gold Medal in 4x100m Relay at the National Championships",
            imageUrl: "https://via.placeholder.com/150",
            description: "A thrilling victory at the national level, demonstrating our team's dedication and teamwork.",
        }
    ]);

    const [editIndex, setEditIndex] = useState(null);

    const updateAchievementField = (index, field, value) => {
        const updatedAchievements = [...achievements];
        updatedAchievements[index][field] = value;
        setAchievements(updatedAchievements);
    };

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateAchievementField(index, 'imageUrl', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEdit = (index) => {
        setEditIndex(index === editIndex ? null : index);
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="form-container" style={{ maxWidth: "900px", padding: "40px", marginTop: "10px" }}>
                <h3 className="text-center mb-4">Achievements</h3>
                <div className="row">
                    {achievements.map((achievement, index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
                            {editIndex === index ? (
                                <div className="card p-3">
                                    <label htmlFor={`year${index}`} className="form-label">Year</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        id={`year${index}`}
                                        value={achievement.year}
                                        onChange={(e) => updateAchievementField(index, 'year', e.target.value)}
                                    />
                                    
                                    <label htmlFor={`title${index}`} className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        id={`title${index}`}
                                        value={achievement.title}
                                        onChange={(e) => updateAchievementField(index, 'title', e.target.value)}
                                    />

                                    <label htmlFor={`description${index}`} className="form-label">Description</label>
                                    <textarea
                                        className="form-control mb-2"
                                        id={`description${index}`}
                                        value={achievement.description}
                                        onChange={(e) => updateAchievementField(index, 'description', e.target.value)}
                                    />

                                    <label htmlFor={`imageUpload${index}`} className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control-file mb-2"
                                        id={`imageUpload${index}`}
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(index, e)}
                                    />
                                    {achievement.imageUrl && (
                                        <img
                                            src={achievement.imageUrl}
                                            alt={`Achievement ${achievement.year}`}
                                            style={{
                                                width: "100%",
                                                maxHeight: "150px",
                                                objectFit: "cover",
                                                borderRadius: "4px",
                                                marginTop: "10px",
                                            }}
                                        />
                                    )}
                                    
                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={() => toggleEdit(index)}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <AchievementCard
                                    achievement={achievement}
                                    onEdit={() => toggleEdit(index)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AchievementCard = ({ achievement, onEdit }) => {
    return (
        <div className="card h-100" style={{ maxWidth: "190px", margin: "0 auto" }}>
            <img
                src={achievement.imageUrl}
                alt={`Achievement ${achievement.year}`}
                className="card-img-top"
                style={{
                    width: "100%",
                    maxWidth: "190px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "4px"
                }}
            />
            <div className="card-body p-2">
                <h6 className="card-title text-center mb-1">{achievement.year}</h6> {/* Center aligned year */}
                <p className="card-text small text-center">{achievement.title}</p> {/* Center aligned title */}
                <p className="card-text small text-center mt-2">{achievement.description}</p> {/* Center aligned description */}
                <div className="text-center">
                    <button
                        className="btn"
                        style={{
                            backgroundColor: "gold", // Gold background
                            color: "white", // White text
                        }}
                        onClick={onEdit}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
