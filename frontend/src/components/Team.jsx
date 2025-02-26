import React, { useEffect, useState } from "react";
import axiosInstance from "../axios"; // Adjust the import path accordingly
import "./Team.css";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axiosInstance.get("/team")
            .then(response => setTeamMembers(response.data))
            .catch(error => console.error("Error fetching team members:", error));
    }, []);

    return (
        <section id="team" className="team-container">
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
            {teamMembers.map(member => (
    <div key={member['id']} className="team-card">
        <img src={`/src/assets/${member['image_url']}`} alt={member['name']} className="team-image" />
        <h3 className="team-name">{member['name']}</h3>
        <p className="team-role">{member['role']}</p>
        <p className="team-description">{member['description']}</p>
    </div>
))}

            </div>
        </section>
    );
};

export default Team;
