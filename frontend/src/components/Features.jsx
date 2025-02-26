import React, { useEffect, useState } from "react";
import axiosInstance from "../axios"; // Adjust the import path accordingly
import "./Features.css";

const Features = () => {
  const [features, setFeatures] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    axiosInstance
      .get("/features")
      .then((response) => setFeatures(response.data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  return (
    <section id="features" className="features-container">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature['id']} className="feature-card">
            
            <h3 className="feature-title">{feature['title']}</h3>
            <p className="feature-description">{feature['description']}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
