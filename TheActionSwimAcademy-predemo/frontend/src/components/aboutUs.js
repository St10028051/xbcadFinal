// aboutUs.js
import React from "react";
import "./aboutUs.css"; // Import styling
import ChadCoachImage from "../Images/Chad coach.jpg"; // Import Chad's image

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* About Section */}
            <section className="about-section">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Action Swim Academy is a South African swimming club located in Kingspark Pool, Durban KwaZulu Natal.
                    The club has produced some of the best swimmers in the country and the world, with many competing on
                    the international stage such as the Aquatic World Championships and even the Olympic Games.
                    Due to a shortage of coaches and inspired athletes in the province, the business has been experiencing
                    fewer swimmers joining the club over the years and current swimmers moving to other provinces or countries
                    to improve their living. This has been a struggle with funds and income due to the lack of joining participants.
                    Along with this, the current club kit order and tracking system is manual and on paper, so having a side
                    eCommerce store to manage kit orders and purchases is a must. Having a website as a call to action
                    would greatly improve the standard of the club and help with the organization of the company kit sales.
                </p>
            </section>

            {/* Meet the Staff Section */}
            <section className="staff-section">
                <h2 className="staff-title">Meet the Staff</h2>

                {/* Staff Member: Alidsar Hatfield */}
                <div className="staff-card">
                    <h3>Head Coach: Alidsar Hatfield</h3>
                    <p>
                        Alidsar Hatfield is a highly experienced swimming coach with over 20 years of coaching elite swimmers.
                        Under his guidance, several athletes have qualified for national and international championships.
                        His philosophy revolves around discipline, consistent improvement, and fostering a love for swimming
                        among young athletes. Alidsar is known for his motivational coaching style and his ability to tailor
                        training programs to individual swimmer needs.
                    </p>
                </div>

                {/* Staff Member: Chad Ho */}
                <div className="staff-card chad-card">
                    <img
                        src={ChadCoachImage}
                        alt="Coach Chad Ho"
                        className="staff-image"
                    />
                    <h3>Assistant Coach: Chad Ho</h3>
                    <p>
                        Chad Ho, a former Olympic swimmer and long-distance swimming champion, brings unmatched expertise
                        and passion to the academy. With a deep understanding of endurance and technique, Chad focuses on
                        preparing swimmers for open water events and long-distance challenges. His approachable personality
                        and firsthand competitive experience inspire swimmers to achieve their best in and out of the pool.
                    </p>
                </div>

                {/* Staff Member: Heather Ashley */}
                <div className="staff-card">
                    <h3>Kit Sales Manager: Heather Ashley</h3>
                    <p>
                        Heather Ashley manages the academy's kit sales and ensures smooth operations of the eCommerce store.
                        With a background in business management and a keen eye for detail, Heather ensures the team and
                        swimmers are always equipped with the best gear. Her customer-centric approach and dedication
                        to maintaining high standards make her a vital member of the team.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
