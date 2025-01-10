import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bigWorkoutData, nutritionData, workoutData } from "../../modules/data";
import Breadcrumbs from "../../layouts/Breadcrumbs/Breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../../layouts/WCards/WorkoutCard";
import BigWorkoutCard from "../../layouts/WCards/BigWorkoutCard";
import "./HomePage.scss";
import NutritionCard from "../../layouts/NCards/NutritionCard";
import BodyStatsComponent from "../../components/BodyStatsComponent/BodyStatsComponent";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="" pagename="" />
      <section className="py-5 workout-list">
        <Container className="mb-5 "
          style={{ padding: "0 80px",  }}>
          <BodyStatsComponent />
        </Container>
        <Container>
          {/* Recommendations Header */}
          <div className="recommendations-header">
            <h2 className="title">Recommendations</h2>
            <div
              className="see-all vertical-center"
              style={{ cursor: "pointer", color: "var(--primaryClr)" }}
              onClick={() => navigate("/workout-list")}
            >
              <span>See All</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          {/* Workout Cards */}
          <Row className="workout-cards space-between" >
            {workoutData.slice(0, 3).map((workout, index) => (
              <Col md={4} sm={6} key={index} className="mb-5 ">
                <WorkoutCard
                  image={workout.image}
                  title={workout.title}
                  time={workout.time}
                  calo={workout.calo}
                  type={workout.type}
                  actionIcon="bi bi-plus"
                />
              </Col>
            ))}
          </Row>

          {/* Big Workout Card Section */}
          <Row 
            className="justify-content-center mb-4 pb-2"
            style={{ backgroundColor: "var(--backgroundClr2)", borderRadius: "10px" }}>
              <Col md={8}>
              <div className="big-workout-cards">
                {bigWorkoutData.map((workout, index) => (
                  <BigWorkoutCard
                    key={index}
                    image={workout.image}
                    title={workout.title}
                    time={workout.time}
                    calo={workout.calo}
                    type={workout.type}
                    exercises={workout.exercises.length.toString()}
                  />
                ))}
              </div>
            </Col>
          </Row>

          {/* Meal Plans Header */}
          <div className="recommendations-header pt-5">
            <h2 className="title">Meal Plans For Today</h2>
            <div
              className="see-all vertical-center"
              style={{ cursor: "pointer", color: "var(--primaryClr)" }}
              onClick={() => navigate("/nutrition-list")}
            >
              <span>See All</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          {/* Nutrition Cards */}
          <Row className="nutrition-cards" >
            {nutritionData.slice(0, 3).map((nutrition, index) => (
              <Col md={4} sm={6} key={index} className="mb-5">
                <NutritionCard
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
};

export default HomePage;
