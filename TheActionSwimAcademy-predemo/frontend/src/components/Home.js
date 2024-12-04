// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import styling
import ActionLogo from "../Images/ActionLogo.jpg"; // Import your images
import HomePageImage from "../Images/Home Page.jpg";
import BronzeWinner from "../Images/BronzeWinner.jpg";

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <img src={ActionLogo} alt="Action Swim Academy Logo" className="hero-logo" />
                <h1 className="hero-title">Welcome to Action Swim Academy</h1>
                <p className="hero-description">
                    Inspiring champions, one stroke at a time.
                </p>
                <div className="hero-buttons">
                    <Link to="/about">
                        <button className="hero-button">Learn More</button>
                    </Link>
                    <Link to="/register">
                        <button className="hero-button">Join Us</button>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    At Action Swim Academy, we believe in building confidence through swimming.
                    Our programs cater to all ages and skill levels, ensuring a safe and enriching
                    experience.
                </p>
                <img src={HomePageImage} alt="Home Page Banner" className="about-image" />
            </section>

            {/* Achievements Section */}
            <section className="achievements-section">
                <h2>Our Achievements</h2>
                <div className="achievements-content">
                    <img src={BronzeWinner} alt="Bronze Winner" className="achievements-image" />
                    <div className="achievements-description">
                        <h3>Bronze Medal Winner</h3>
                        <p>
                            One of our proud swimmers recently brought home a bronze medal in the
                            national championships. Join us to become the next champion!
                        </p>
                        <Link to="/achievements">
                            <button className="achievements-button">View More Achievements</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <h2>Get in Touch</h2>
                <p>
                    Have questions? Reach out to us for more information about our programs, classes, and schedules.
                </p>
                <Link to="/contactus">
                    <button className="contact-button">Contact Us</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;
