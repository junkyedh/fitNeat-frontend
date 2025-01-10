import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { workoutData } from "../../../modules/data";
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../../../layouts/WCards/WorkoutCard";
import { Button } from "antd";
import "./MyRoutine.scss";
import { useNavigate } from "react-router-dom";

const MyRoutine: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Intermediate");
  const [iconStates, setIconStates] = useState<string[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Workout List";
    window.scroll(0, 0);

    // Initialize icon states with default icon "bi bi-play-fill"
    setIconStates(Array(workoutData.length).fill("bi bi-play-fill"));
  }, []);

  const handleAddNew = () => {
    const newIconStates = workoutData.map(() =>
      Math.random() > 0.5 ? "bi bi-plus" : "bi bi-check"
    );
    setIconStates(newIconStates);
  };

  return (
    <>
      <Breadcrumbs title="Workout List" pagename="Workout List" />
      <section className="py-5 workout-list">
        <Container>
          {/* Bộ Lọc Buttons */}
          <Row className="justify-content-center mb-4">
            <div className="filter-buttons">
              {["All", "Beginner", "Intermediate", "Advanced", "My Routine"].map((level) => (
                <Button
                  key={level}
                  className={`filter-button ${selectedFilter === level ? "active" : ""}`}
                  onClick={() => {
                    setSelectedFilter(level);
                    switch (level) {
                      case "All":
                        nav("/workout-list");
                        break;
                      case "Beginner":
                        nav("/workout-list-beginner");
                        break;
                      case "Intermediate":
                        nav("/workout-list-beginner");
                        break;
                      case "Advanced":
                        nav("/workout-list-beginner");
                        break;
                      case "My Routine":
                        nav("/workout-list-my-routine");
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

          <div className="recommendations-header1 mt-2">
            <h2 className="title">My Daily Routine</h2>
            <div
              className="add-new vertical-center"
              style={{ cursor: "pointer", color: "var(--primaryClr)" }}
              onClick={handleAddNew}
            >
              <i className="bi bi-plus"></i>
              <span>Add New</span>
            </div>
          </div>
          {/* Workout Cards */}
          <Row>
            {workoutData.slice(0).map((workout, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <WorkoutCard
                  image={workout.image}
                  title={workout.title}
                  time={workout.time}
                  calo={workout.calo}
                  type={workout.type}
                  actionIcon={iconStates[index]} // Pass the current icon state
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyRoutine;
