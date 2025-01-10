import React from "react";
import "./BeginnerCard.scss";

interface BeginnerCardProps {
  image: string;
  title: string;
  time: string;
  calo: string;
  exercises: string;
}

const BeginnerCard: React.FC<BeginnerCardProps> = ({ image, title, time, calo, exercises }) => {
  return (
    <div className="beginner-card">
      <div className="beginner-card__image-wrapper">
        <img src={image} alt={title} className="beginner-card__image" />
      </div>
      <div className="beginner-card__content">
        <h3 className="beginner-card__title">{title}</h3>
        <div className="beginner-card__info">
          <div className="beginner-card__info-item">
            <i className="bi bi-clock"></i> {time}
          </div>
          <div className="beginner-card__info-item">
            <i className="bi bi-fire"></i> {calo}
          </div>
          <div className="beginner-card__info-item">
            <i className="bi bi-list-check"></i> {exercises} Exercises
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerCard;
