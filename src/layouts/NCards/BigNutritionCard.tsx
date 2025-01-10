import React from "react";
import "./BigNutritionCard.scss";

interface NutritionCardProps {
  image: string;
  title: string;
  time: string;
  calo: string;
}

const BigNutritionCard: React.FC<NutritionCardProps> = ({ image, title, time, calo}) => {
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
        </div>
      </div>
    </div>
  );
};

export default BigNutritionCard;
