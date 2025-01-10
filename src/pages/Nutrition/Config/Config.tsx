import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Button, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Config.scss";
const Config: React.FC = () => {
  const [selectedPreference, setSelectedPreference] = useState<string>("");
  const [selectedAllergy, setSelectedAllergy] = useState<string>("");
  const [selectedMealType, setSelectedMealType] = useState<string>("");

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Config";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Config" pagename="Config" />
      <section className="py-5 config-section">
        <Container>
          <div className="config-container">
            {/* Dietary Preferences */}
            <div className="config-group">
              <h2>Dietary Preferences</h2>
              <p>What are your dietary preferences?</p>
              <div className="config-options">
                {["Vegetarian", "Vegan", "Gluten-Free", "Keto", "Paleo", "No preferences"].map((option) => (
                  <label key={option} className={`config-option ${selectedPreference === option ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="dietary"
                      value={option}
                      onChange={() => setSelectedPreference(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Allergies */}
            <div className="config-group">
              <h2>Allergies</h2>
              <p>Do you have any food allergies we should know about?</p>
              <div className="config-options">
                {["Nuts", "Dairy", "Shellfish", "Eggs", "No allergies"].map((option) => (
                  <label key={option} className={`config-option ${selectedAllergy === option ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="allergies"
                      value={option}
                      onChange={() => setSelectedAllergy(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Meal Types */}
            <div className="config-group">
              <h2>Meal Types</h2>
              <p>Which meals do you want to plan?</p>
              <div className="config-options">
                {["Breakfast", "Lunch", "Dinner", "Snacks"].map((option) => (
                  <label key={option} className={`config-option ${selectedMealType === option ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="meals"
                      value={option}
                      onChange={() => setSelectedMealType(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <Button className="next-button" onClick={() => navigate("/nutrition-list-configFinal")}>
              Next
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};



export default Config;