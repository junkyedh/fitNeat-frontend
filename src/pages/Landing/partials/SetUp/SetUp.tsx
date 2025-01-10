import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SetUp.scss";
import { Modal, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../layouts/Breadcrumbs/Breadcrumbs";


const SetUp = () => {
  const nav = useNavigate();
  var settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          arrows: false
        },
      }
    ],
  };

  const [selectedGoal, setSelectedGoal] = React.useState<string | null>(null);

  const goals = [
    { title: "Lose Weight", icon: "bi bi-circle" },
    { title: "Gain Weight", icon: "bi bi-circle" },
    { title: "Shape Body", icon: "bi bi-circle" },
    { title: "Build Muscle", icon: "bi bi-circle" },
    { title: "Other", icon: "bi bi-circle" }
  ];

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [customGoal, setCustomGoal] = React.useState("");

  const handleGoalClick = (goalTitle: string) => {
    if (goalTitle === "Other") {
      setIsModalVisible(true);
    } else {
      setSelectedGoal(goalTitle);
    }
  };

  const handleTry = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log("Show More button clicked");
    // Implement the logic to show more content here
  };

  const handleOk = () => {
    setSelectedGoal(customGoal);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const handleContinue = () => {
    nav("/profile-user");
  };

  return (
    <>
      <Breadcrumbs title="Set Up" pagename="Set Up" />
      <section className="box shadow-sm mb-5 mt-4">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-container shadow-sm">
                <div className="item-goals text-center">
                  <Card className="border-0 shadow-sm rounded-3 text-center">
                    <Card.Body style={{ backgroundColor: "var(--backgroundClr2)", }}>
                      <Card.Title
                        style={{ color: "var(--white)", fontSize: "2rem", marginBottom: "2rem" }}
                        className="fw-bold"
                      >
                        What Is Your Goal
                      </Card.Title>
                      <div className="d-flex flex-wrap justify-content-center max-md:max-w-full">
                        <div className="d-flex w-100 mb-4" style={{ justifyContent: "space-evenly" }}>
                          {goals.slice(0, 3).map((goal, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center bg-white p-3 rounded-4"
                              onClick={() => handleGoalClick(goal.title)}
                            >
                              <span
                                style={{ fontSize: "1.5rem", color: "var(--black)", margin: "1rem 0.5rem" }}
                                className="text-center"
                              >
                                {goal.title}
                              </span>
                              <Button
                                style={{ fontSize: "1.5rem", color: "var(--black)", backgroundColor: "transparent", border: "none" }}
                                className={selectedGoal === goal.title ? "bi bi-check-circle-fill" : "bi bi-circle"}
                              ></Button>
                            </div>
                          ))}
                        </div>
                        <div className="d-flex justify-content-center w-100">
                          {goals.slice(3).map((goal, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center mx-4 bg-white p-3 rounded-4"
                              onClick={() => handleGoalClick(goal.title)}
                            >
                              <span
                                style={{ fontSize: "1.5rem", color: "var(--black)", margin: "1rem 0.5rem" }}
                                className="text-center gap-5"
                              >
                                {goal.title}
                              </span>
                              <Button
                                style={{ fontSize: "1.5rem", color: "var(--black)", backgroundColor: "transparent", border: "none"  }}
                                className={selectedGoal === goal.title ? "bi bi-check-circle-fill" : "bi bi-circle"}
                              ></Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
            <Modal 
            title="Enter Your Goal" 
            visible={isModalVisible}
            onOk={handleOk} 
            onCancel={handleCancel}
            okButtonProps={{
              style: { 
                color: "var(--black)", 
                backgroundColor: "var(--primaryClr)", 
                border: "1px solid var(--primaryClr)" 
              }
            }}
            cancelButtonProps={{
              style: { 
                color: "var(--black)",
                backgroundColor: "transparent", 
                border: "1px solid var(--primaryClr)" 
              }
            }}
            >
            <Input 
              value={customGoal} 
              onChange={(e) => setCustomGoal(e.target.value)} 
              placeholder="Enter your custom goal" 
            />
            </Modal>
        </Container>
      </section>

      <section className="box1 shadow-sm pt-5 pb-5">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-container1 shadow-sm">
                <div className="item-level text-center">
                  <Card >
                    <Card.Body style={{ backgroundColor: "black", border: "none" }}>
                      <Card.Title
                        style={{ color: "var(--white)", fontSize: "2rem", marginBottom: "2rem", border: "none" }}
                        className="fw-bold"
                      >
                        Physical Activity Level
                      </Card.Title>
                        <div className="level d-flex flex-wrap max-md:max-w-full">
                        {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
                          <Button
                            type="primary"
                            key={index}
                            className="flex flex-col items-center mx-4 bg-white rounded-4"
                            onClick={() => console.log(`${level} level selected`)}
                            style={{ cursor: "pointer", fontSize: "1.5rem", color: "var(--black)", margin: "1rem 0.5rem", padding: "2rem 2rem"}}
                          >
                          {level}
                          </Button>
                        ))}
                        </div>
                        <div className="d-flex flex-wrap justify-content-center max-md:max-w-full mt-5">
                          <div className="d-flex flex-row align-items-center mx-4">
                            <span style={{ fontSize: "1.5rem", color: "var(--white)", margin: "1rem 1rem" }}>Age:</span>
                            <select className="form-select" style={{ fontSize: "1rem", color: "var(--black)" }}>
                              <option key="defaultAge" value="defaultAge">Select Age</option>
                            </select>
                          </div>
                          <div className="d-flex flex-row align-items-center mx-5">
                            <span style={{ fontSize: "1.5rem", color: "var(--white)", margin: "1rem 1rem" }}>Gender</span>
                            <select className="form-select" style={{ fontSize: "1rem", color: "var(--black)" }}>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center max-md:max-w-full mt-4 mb-5"> 
                          <div className="d-flex flex-row align-items-center">
                            <span style={{ fontSize: "1.5rem", color: "var(--white)", width:"160px" }}>Weight (kg)</span>
                            <input type="number" className="form-control" style={{ fontSize: "1rem", color: "var(--black)", width:"150px" }} />
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <span style={{ fontSize: "1.5rem", color: "var(--white)", margin: "0 0 0 4rem", width: "160px"}}>Height (cm)</span>
                            <input type="number" className="form-control" style={{ fontSize: "1rem", color: "var(--black)", width: "150px", margin: "0 2rem 0 0"}} />
                          </div>
                        </div>
                        
                    </Card.Body>
                  </Card>
                  
                  {/* Continue Button */}
                  <div className="continue-btn-container text-center max-md:max-w-full mt-5">
                    <Button
                      style={{ backgroundColor: "var(--primaryClr)", borderRadius: "0", padding: "20px 30px", fontSize: "1.2rem", fontWeight: "bold" }}
                      type="primary"
                      className="continue-btn"
                      onClick={handleContinue}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>




    </>
  );
};

export default SetUp;
