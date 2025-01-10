import React from "react";
import "./NutritionCard.scss";

interface NutritionCardProps {
  image: string;
  title: string;
  time: string;
  calo: string;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ image, title, time, calo }) => {
  return (
    <div className="nutrition-card">
      <div className="nutrition-card__image-wrapper">
        <img src={image} alt={title} className="nutrition-card__image" />
      </div>
      <div className="nutrition-card__content">
        <h3 className="nutrition-card__title">{title}</h3>
        <div className="nutrition-card__info">
          <div className="nutrition-card__info-item">
            <i className="bi bi-clock"></i> {time}
          </div>
          <div className="nutrition-card__info-item">
            <i className="bi bi-fire"></i> {calo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
