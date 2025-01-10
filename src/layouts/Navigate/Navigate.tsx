import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import "./Navigate.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import icons1 from "../../assets/nutrition_16947904.png";
import icons2 from "../../assets/workout_3271136.png";
import icons3 from "../../assets/calendar_7107616.png";

const Navigate = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                  <Card className="border-0 shadow-sm rounded-3 text-center">
                    <Card.Body style={{ backgroundColor: "var(--backgroundClr2)" }}>
                      <img src={icons2} alt="WORKOUT" className="mb-3 img-fluid icon-small" />
                      <Card.Title 
                        className="fw-bold"
                        onClick={() => handleNavigation("/workout-list")}
                        style={{ cursor: "pointer" }}
                      >
                        WORKOUT
                      </Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow-sm rounded-3 text-center">
                    <Card.Body style={{ backgroundColor: "var(--backgroundClr2)" }}>
                      <img src={icons1} alt="NUTRITION" className="icon-small" />
                      <Card.Title 
                        className="fw-bold"
                        onClick={() => handleNavigation("/nutrition-list")}
                        style={{ cursor: "pointer" }}
                      >
                      NUTRITION</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="border-0 shadow-sm rounded-3 text-center">
                    <Card.Body style={{ backgroundColor: "var(--backgroundClr2)" }}>
                      <img src={icons3} alt="PROGRESS" className="mb-3 img-fluid icon-small" />
                      <Card.Title 
                        className="fw-bold"
                        onClick={() => handleNavigation("/progress")}
                        style={{ cursor: "pointer" }}
                      >
                          PROGRESS</Card.Title>
                    </Card.Body>
                  </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Navigate;