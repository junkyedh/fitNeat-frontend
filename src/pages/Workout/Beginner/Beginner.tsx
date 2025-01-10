import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "antd"; // Import Ant Design Button
import "./Beginner.scss"; // Import file CSS
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";
import video from "../../../assets/5.jpg";

const Beginner: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Beginner");
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Workout List";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Workout List" pagename="Workout List" />
      <section className="py-5 beginner-container">
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
            className="content-section"
            style={{ backgroundColor: "var(--backgroundClr2)", borderRadius: "10px" }}
          >
          {/* Right Column */}
          <Col lg={7} className="left-column">
            <div className="video-preview">
              <img
                src= {video}
                alt="Workout"
                className="video-image"
              />
              <button className="play-button">
                <i className="bi bi-play-fill"></i>
              </button>
            </div>
          </Col>

           { /* Left Column */}
            <Col lg={5} className="right-column">
                <div className="video-info">
                    <h3>Full Body Stretching</h3>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Cursus Libero Eget.</p>
                    <div className="video-stats">
                        <span>
                            <i className="bi bi-clock"></i> 30 Seconds
                        </span>
                        <span>
                            <i className="bi bi-fire"></i> 3 Round
                        </span>
                        <span>
                            <i className="bi bi-person"></i> Beginner
                        </span>
                    </div>
                </div>  

                            {/* Rounds */}
                <div className="rounds">
                <div className="round">
                    <h4>Round 1</h4>
                    <ul>
                    <li>
                        <i className="bi bi-play-circle"></i>
                        Dumbbell Rows <span>00:30</span> <span>Repetition 3x</span>
                    </li>
                    <li>
                        <i className="bi bi-play-circle"></i>
                        Russian Twists <span>00:15</span> <span>Repetition 2x</span>
                    </li>
                    <li>
                        <i className="bi bi-play-circle"></i>
                        Squats <span>00:30</span> <span>Repetition 3x</span>
                    </li>
                    </ul>
                </div>
                <div className="round">
                    <h4>Round 2</h4>
                    <ul>
                    <li>
                        <i className="bi bi-play-circle"></i>
                        Tabata Intervals <span>00:10</span> <span>Repetition 2x</span>
                    </li>
                    <li>
                        <i className="bi bi-play-circle"></i>
                        Bicycle Crunches <span>00:20</span> <span>Repetition 4x</span>
                    </li>
                    </ul>
                </div>
                </div>
            </Col>

          </Row>    

        </Container>
      </section>
    </>
  );
};

export default Beginner;
