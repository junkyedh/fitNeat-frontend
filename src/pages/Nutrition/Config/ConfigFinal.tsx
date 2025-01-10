import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";
import "./ConfigFinal.scss";

const ConfigFinal: React.FC = () => {
  const [selectedCaloricGoal, setSelectedCaloricGoal] = useState<string>("");
  const [selectedCookingTime, setSelectedCookingTime] = useState<string>("");
  const [selectedServings, setSelectedServings] = useState<string>("");

  useEffect(() => {
    document.title = "Config";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Config" pagename="Config" />
      <section className="py-5 meal-preferences-section">
        <Container>
          <div className="meal-preferences-container">
            {/* Caloric Goal */}
            <div className="preferences-group">
              <h2>Caloric Goal</h2>
              <p>What is your daily caloric intake goal?</p>
              <div className="preferences-options">
                {[
                  "Less than 1500 calories",
                  "1500-2000 calories",
                  "More than 2000 calories",
                  "Not sure/Don't have a goal",
                ].map((option) => (
                  <label
                    key={option}
                    className={`preferences-option ${selectedCaloricGoal === option ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="caloricGoal"
                      value={option}
                      onChange={() => setSelectedCaloricGoal(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Cooking Time Preference */}
            <div className="preferences-group">
              <h2>Cooking Time Preference</h2>
              <p>How much time are you willing to spend cooking each meal?</p>
              <div className="preferences-options">
                {["Less than 15 minutes", "15-30 minutes", "More than 30 minutes"].map((option) => (
                  <label
                    key={option}
                    className={`preferences-option ${selectedCookingTime === option ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="cookingTime"
                      value={option}
                      onChange={() => setSelectedCookingTime(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Number Of Servings */}
            <div className="preferences-group">
              <h2>Number Of Servings</h2>
              <p>How many servings do you need per meal?</p>
              <div className="preferences-options">
                {["1", "2", "3-4", "More than 4"].map((option) => (
                  <label
                    key={option}
                    className={`preferences-option ${selectedServings === option ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="servings"
                      value={option}
                      onChange={() => setSelectedServings(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <Button
              className="save-button"
              onClick={() => {
                alert("Preferences Saved!");
                window.location.href = "/nutrition-list-plans";
              }}
            >
              Save
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ConfigFinal;
