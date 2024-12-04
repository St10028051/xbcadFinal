import React from "react";
import "./Gallery.css"; // Import CSS for styling
import ActionLogo from "../Images/ActionLogo.jpg";
import BronzeWinner from "../Images/BronzeWinner.jpg";
import ChadCoach from "../Images/Chad coach.jpg";
import Gold2023 from "../Images/gold2023.jpg";
import HomePage from "../Images/Home Page.jpg";
import TeamSouthAfrica from "../Images/TeamSouthAfrica.jpg";
import SilverMedal from "../Images/silvermedal.jpg";
import Relay2020 from "../Images/2020Relay.jpg";

const Gallery = () => {
    const images = [
        { src: ActionLogo, alt: "Action Logo" },
        { src: BronzeWinner, alt: "Bronze Winner" },
        { src: ChadCoach, alt: "Coach Chad" },
        { src: Gold2023, alt: "Gold Medal 2023" },
        { src: HomePage, alt: "Home Page" },
        { src: TeamSouthAfrica, alt: "Team South Africa" },
        { src: SilverMedal, alt: "Silver Medal" },
        { src: Relay2020, alt: "2020 Relay" },
    ];

    return (
        <div className="gallery-page">
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-description">
                Explore moments of pride and achievement at Action Swim Academy.
            </p>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                        />
                        <p className="gallery-caption">{image.alt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
