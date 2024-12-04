import React from "react";
import "./Achievements.css";
import ActionLogo from "../Images/ActionLogo.jpg";
import BronzeWinner from "../Images/BronzeWinner.jpg";
import SilverMedal from "../Images/silvermedal.jpg";
import Gold2023 from "../Images/gold2023.jpg";
import TeamSouthAfrica from "../Images/TeamSouthAfrica.jpg";
import Relay2020 from "../Images/2020Relay.jpg";

const achievementsData = [
    {
        year: "2024",
        description: "Multiple swimmers qualified for the 2024 Olympic Games. A historic moment for the team.",
        image: TeamSouthAfrica,
    },
    {
        year: "Top Club",
        description: "Top club at the regional championships for three consecutive years. Recognition for consistent excellence.",
        image: ActionLogo,
    },
    {
        year: "2023",
        description: "Gold Medal in 4x100m Relay at the Aquatic World Championships. A remarkable achievement.",
        image: Gold2023,
    },
    {
        year: "2022",
        description: "Silver Medal in 200m Freestyle at the National Championships. An impressive performance.",
        image: SilverMedal,
    },
    {
        year: "2021",
        description: "Bronze Medal in 100m Butterfly at the Junior Olympics. Showcasing talent at a young age.",
        image: BronzeWinner,
    },
    {
        year: "2020",
        description: "Gold Medal in 4x100m Relay at the National Championships. A thrilling victory for the team.",
        image: Relay2020,
    },
];

const Achievements = () => {
    return (
        <div className="achievements-page">
            <h1 className="achievements-title">Achievements</h1>
            <div className="achievements-container">
                {achievementsData.map((achievement, index) => (
                    <div className="achievement-card" key={index}>
                        <img
                            src={achievement.image}
                            alt={`${achievement.year} Achievement`}
                            className="achievement-image"
                        />
                        <div className="achievement-content">
                            <h3 className="achievement-year">{achievement.year}</h3>
                            <p className="achievement-description">{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
