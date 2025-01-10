import React from "react";
import "./WorkoutCard.scss";

interface WorkoutCardProps {
  image: string;
  title: string;
  time: string;
  calo: string;
  type: string;
  actionIcon: string; // Add a new prop for the action icon
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  image,
  title,
  time,
  calo,
  type,
  actionIcon,
}) => {
  return (
    <div className="workout-card">
      <div className="workout-card__image-wrapper">
        <img src={image} alt={title} className="workout-card__image" />
      </div>
      <div className="workout-card__content">
        <h3 className="workout-card__title">{title}</h3>
        <div className="workout-card__info">
          <div className="workout-card__info-item">
            <i className="bi bi-clock"></i> {time}
          </div>
          <div className="workout-card__info-item">
            <i className="bi bi-fire"></i> {calo}
          </div>
        </div>
        <div className="workout-card__action">
          <button className="workout-card__play-button">
            <i className={actionIcon}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
