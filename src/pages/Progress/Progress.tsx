import Breadcrumbs from "../../layouts/Breadcrumbs/Breadcrumbs";
import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Progress.scss";
import BodyStatsComponent from "../../components/BodyStatsComponent/BodyStatsComponent";

const Progress: React.FC = () => {
  useEffect(() => {
    document.title = "Progress Tracking";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Progress Tracking" pagename="Progress Tracking" />
    <section className="py-5 progress-section">
      <Container>
        <div className="progress-tracking-container">
        {/* Overview Section */}
        <Row className="mb-4">
          <Col md={12}>
            <BodyStatsComponent />
          </Col>
          {/* <Col md={6}>
            <div className="user-profile">
            <h4>Perry</h4>
            <p>Age: 18</p>
            <p>48 Kg Weight</p>
            <p>1.58 CM Height</p>
            <img
              src="profile_image_placeholder.jpg"
              alt="Perry"
              className="profile-image"
            />
            </div>
          </Col> */}
        </Row>

            {/* Workout Log */}
            <Row className="mb-4">
              <Col md={6}>
                <div className="calendar-section">
                  <h5>Workout Log</h5>
                  <div className="calendar">
                    {/* Calendar can be implemented using a library like react-calendar */}
                    <p>Calendar placeholder</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="steps-section">
                  <h5>January 12th</h5>
                  <div className="steps-bar-chart">
                    {/* Bar chart placeholder */}
                    <p>Steps Bar Chart Placeholder</p>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Activities Section */}
            <Row>
              <Col md={6}>
                <h5>Activities</h5>
                <ul className="activities-list">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <li key={index} className="activity-item">
                        <span className="activity-icon">🏋️</span>
                        <div className="activity-details">
                          <p>Upper Body Workout</p>
                          <small>June 09</small>
                          <small>120 Kcal - 25 Mins</small>
                        </div>
                      </li>
                    ))}
                </ul>
              </Col>
              <Col md={6}>
                <h5>Recent Steps</h5>
                <ul className="steps-list">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <li key={index} className="step-item">
                        <div className="step-date">Thu 14</div>
                        <div className="step-details">
                          <p>3,679 Steps</p>
                          <small>1 hr 40 mins</small>
                        </div>
                      </li>
                    ))}
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Progress;
