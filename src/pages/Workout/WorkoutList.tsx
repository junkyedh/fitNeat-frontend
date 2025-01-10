import Breadcrumbs from "../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { beginnerWorkoutData, bigWorkoutData, workoutData } from "../../modules/data";
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../../layouts/WCards/WorkoutCard";
import BigWorkoutCard from "../../layouts/WCards/BigWorkoutCard"; // Import BigWorkoutCard
import { Button } from "antd"; // Import Ant Design Button
import "./WorkoutList.scss"; // Import file CSS
import { useNavigate } from "react-router-dom";
import BeginnerCard from "../../layouts/WCards/BeginnerCard";

const WorkoutList: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Intermediate");
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Workout List";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Workout List" pagename="Workout List" />
      <section className="py-5 workout-list">
        <Container>
          {/* Bộ Lọc Buttons */}
            <Row className="justify-content-center mb-4">
            <div className="filter-buttons">
              {["All","Beginner", "Intermediate", "Advanced", "My Routine"].map((level) => (
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

          {/* Big Workout Section */}
          <Row
            className="justify-content-center mb-4 pb-2"
            style={{ backgroundColor: "var(--backgroundClr2)", borderRadius: "10px" }}
          >
            <Col md={8}>
              <div className="border-0">
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


          <div className="recommendations-header1 mt-2 ">
            <h2 className="title">My Routine</h2>
            <div
              className="see-all vertical-center"
              style={{ cursor: "pointer", color: "var(--primaryClr)" }}
              onClick={() => nav("/workout-list")}
            >
              <span>See All</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          {/* Workout Cards */}
          <Row>
            {workoutData.slice(0, 3).map((workout, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
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

         {/* Let's Go Beginner Section */}
         <div className=" py-2">
            <h2 className="section-title">Let's Go Beginner</h2>
            <p className="section-subtitle">Explore Different Workout Styles</p>
          </div>
         {/* <Row className="recommendations-header1">
            <Col md={8} className="text-center">
              <h2 className="section-title">Let's Go Beginner</h2>
              <p className="section-subtitle">Explore Different Workout Styles</p>
            </Col>
          </Row> */}
          <Row className="mb-5">
            {beginnerWorkoutData.map((workout, index) => (
              <Col md={6} className="mb-4" key={index}>
                <BeginnerCard
                  image={workout.image}
                  title={workout.title}
                  time={workout.time}
                  calo={workout.calo}
                  exercises={workout.exercises.length.toString()}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WorkoutList;
