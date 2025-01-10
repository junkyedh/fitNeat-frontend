import about1 from "../../assets/1.jpg";
import about2 from "../../assets/9.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navigate from "../../layouts/Navigate/Navigate";
import "./Landing.css";
import Banner from "./partials/Banner/Banner";
import { useNavigate } from "react-router-dom";


const Landing = () => {
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


  const handleTry = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    nav("/setup");
  }

  return (
    <>
      <Banner />
      <Navigate />
      <Row>
        <Col md="12" className="text-center mt-3">
          <Button 
            style={{backgroundColor: "var(--primaryClr)", borderRadius: "0", padding: "10px 30px"}}
            onClick={handleTry} variant="primary">
            Try now
          </Button>
        </Col>
      </Row>
      <section className="about-section py-5">
        <Container>
          <section className="about-section py-4">
            <Container>
              {/* History */}
              <Row className="align-items-start mb-5">
                <Col md="6">
                <Card.Title 
                    style={{color: "var(--primaryClr)"}}
                    className="fw-bold h3"
                  >WORKOUT
                  </Card.Title>
                  <p style={{color: "var(--white)"}}>
                    Over 20 years ago, we began our journey of building a hotel brand with the goal of becoming a symbol of luxury and elegance. Starting from a small hotel with just a few rooms, we continuously strived to enhance our services, expand our scale, and improve quality.
                  </p>
                </Col>
                <Col md="6">
                  <img
                    src={about1}
                    alt="Hotel History"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
              </Row>

              {/* Mission */}
              <Row className="align-items-start mb-5">
                <Col md="6" className="order-md-2">
                  <Card.Title 
                    style={{color: "var(--primaryClr)"}}
                    className="fw-bold h3">NUTRITION</Card.Title>
                    <p 
                    style={{color: "var(--white)"}}
                    className="mb-4">
                      Our mission is to provide customers with an unforgettable experience, from attentive service to a comfortable living space. We aim to go beyond offering accommodations by creating an environment where customers feel as welcomed as they would at Landing, but with elevated luxury and sophistication.
                    </p>
                </Col>
                <Col md="6" className="order-md-1">
                  <img
                    src={about2}
                    alt="Hotel Mission"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Landing;