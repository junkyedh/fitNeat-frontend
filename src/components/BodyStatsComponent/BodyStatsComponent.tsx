import React from "react";
import "./BodyStatsComponent.scss";

const BodyStatsComponent: React.FC = () => {
  return (
    <div className="body-stats">
      {/* Eaten, Circle Progress, Burned */}
      <div className="row">
        <div className="stat-item">
          <h3>1534</h3>
          <p>Eaten</p>
        </div>
        <div className="stat-item">
          <svg
            width="200"
            height="200"
            viewBox="-25 -25 250 250"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="90"
              cx="100"
              cy="100"
              fill="transparent"
              stroke="#5c9aff"
              strokeWidth="16px"
            ></circle>
            <circle
              r="90"
              cx="100"
              cy="100"
              stroke="#ffffff"
              strokeWidth="16px"
              strokeLinecap="round"
              strokeDashoffset="118.692px"
              fill="transparent"
              strokeDasharray="565.48px"
            ></circle>
            <text
              x="71px"
              y="115px"
              fill="thistle"
              fontSize="52px"
              fontWeight="bold"
              style={{ transform: "rotate(90deg) translate(0px, -196px)" }}
            >
              79
            </text>
          </svg>
        </div>
        <div className="stat-item">
          <h3>414</h3>
          <p>Burned</p>
        </div>
      </div>

      {/* Carbs, Protein, Fat */}
      <div className="row">
        <div className="stat-item">
          <h3>45 / 295g</h3>
          <p>Carbs</p>
        </div>
        <div className="stat-item">
          <h3>3 / 118g</h3>
          <p>Protein</p>
        </div>
        <div className="stat-item">
          <h3>2 / 79g</h3>
          <p>Fat</p>
        </div>
      </div>
    </div>
  );
};

export default BodyStatsComponent;
