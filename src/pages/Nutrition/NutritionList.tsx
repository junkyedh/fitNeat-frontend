import Breadcrumbs from "../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { nutritionData } from "../../modules/data"; // Add this line to import nutritionData
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BodyStatsComponent from "../../components/BodyStatsComponent/BodyStatsComponent";
import BigNutritionCard from "../../layouts/NCards/BigNutritionCard";
import NutritionCard from "../../layouts/NCards/NutritionCard";

const NutritionList: React.FC = () => {
    const nav = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState<string>("Intermediate");
    
  
useEffect(() => {
  document.title = " Nutrition List";   
  window.scroll(0, 0);
}, []);



return (
  <>
    <Breadcrumbs title="Nutrition List" pagename="Nutrition List" />
    <section className="py-5 tour_list">
      {/* Bộ Lọc Buttons */}
      <Row className="justify-content-center mb-4">
        <div className="filter-buttons">
          {["Meal Plans","Config"].map((level) => (
          <Button 
            key={level}
            className={`filter-button ${selectedFilter === level ? "active" : ""}`}
            onClick={() => {
            setSelectedFilter(level);
            switch (level) {
              case "Meal Plans":
                nav("/nutrition-list-plans");
                break;
              case "Config":
                nav("/nutrition-list-config");
                break;
              default:
              break;
            }
            }}
          >
            {level}
          </Button>
          ))}
        </div>
      </Row>
      <Container className="mb-5 " style={{ padding: "0 80px",  }}>
        <BodyStatsComponent />
      </Container>

      <Container>

      <div className="recommendations-header1 mt-2 ">
            <h2 className="title">Recommendations</h2>
            <div
              className="see-all vertical-center"
              style={{ cursor: "pointer", color: "var(--primaryClr)" }}
              onClick={() => nav("/nutrition-list")}
            >
              <span>See All</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          {/* Workout Cards */}
          <Row>
            {nutritionData.slice(0, 3).map((workout, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <NutritionCard
                  image={workout.image}
                  title={workout.title}
                  time={workout.time}
                  calo={workout.calo}
                />
              </Col>
            ))}
          </Row>

        <div className="recommendations-header1 mt-2 ">
          <h2 className="title">Daily Meal Plan</h2>
          {/* <div
            className="see-all vertical-center"
            style={{ cursor: "pointer", color: "var(--primaryClr)" }}
            onClick={() => nav("/nutrition-list-plans")}
          >
            <span>See All</span>
            <i className="bi bi-arrow-right"></i>
          </div> */}
        </div>
        <Row>
          {nutritionData.slice(0,6).map((nutrition, index) => (
            <Col md={6} key={index} className="mb-4">
              <BigNutritionCard
                image={nutrition.image}
                title={nutrition.title}
                time={nutrition.time}
                calo={nutrition.calo}
              />
            </Col>
          ))}
        </Row>
    </Container>
    </section>

  </>
);
}

export default NutritionList;