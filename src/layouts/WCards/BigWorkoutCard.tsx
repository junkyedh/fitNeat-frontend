import React from "react";
import "./BigWorkoutCard.scss";

interface BigWorkoutCardProps {
  image: string;
  title: string;
  time: string;
  calo: string;
  type: string;
  exercises: string;
}

const BigWorkoutCard: React.FC<BigWorkoutCardProps> = ({ image, title, time, calo, exercises }) => {
  return (
    <div className="big-workout-card">
      <div className="big-workout-card__image-wrapper">
        <div className="bigworkout-card__action">
          <button className="bigworkout-card__play-button">
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
        <img src={image} alt={title} className="big-workout-card__image" />
        <div className="big-workout-card__label">Training Of The Day</div>
      </div>
      <div className="big-workout-card__info">
        <div className="big-workout-card__info-item">
          <i className="bi bi-clock"></i> {time}
        </div>
        <div className="big-workout-card__info-item">
          <i className="bi bi-fire"></i> {calo}
        </div>
        <div className="big-workout-card__info-item">
          <i className="bi bi-list"></i> {exercises} Exercise
        </div>
      </div>
    </div>
  );
};

export default BigWorkoutCard;
