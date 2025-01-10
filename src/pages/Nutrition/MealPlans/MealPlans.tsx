import { nutritionData } from "../../../modules/data";
import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BigNutritionCard from "../../../layouts/NCards/BigNutritionCard";
import "./MealPlans.scss";
const MealPlans: React.FC = () => {
  const nav = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>("Intermediate");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Meal Plans";
    window.scroll(0, 0);
  }, []);

  const handleSelect = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <>
      <Breadcrumbs title="Meal Plans" pagename="Meal Plans" />
      <section className="py-5 tour_list">
        <Container>
          <div className="py-2">
            <h2 className="section-title">Breakfast Plan For You</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
          <Row>
            {nutritionData.map((nutrition, index) => (
              <Col md={6} key={index} className="mb-4">
                <label 
                  className={`nutrition-item ${selectedItem === index ? "selected" : ""}`} 
                  htmlFor={`nutrition-${index}`}
                  onClick={() => handleSelect(index)}
                >
                  <Form.Check
                    type="radio"
                    name="nutritionSelect"
                    id={`nutrition-${index}`}
                    checked={selectedItem === index}
                    onChange={() => handleSelect(index)}
                    className="nutrition-radio"
                  />
                  <BigNutritionCard
                    image={nutrition.image}
                    title={nutrition.title}
                    time={nutrition.time}
                    calo={nutrition.calo}
                  />
                </label>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center mb-4">
            <Button
            style={{backgroundColor: "var(--primaryClr)"}}
              className={`filter-button ${selectedFilter === "See Recipe" ? "active" : ""}`}
              onClick={() => {
                setSelectedFilter("See Recipe");
                nav("/nutrition-list-plans");
              }}
            >
              See Recipe
            </Button>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MealPlans;
