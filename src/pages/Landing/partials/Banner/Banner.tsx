import React from "react";
import sliderImg1 from "@/assets/background.jpg";
import sliderImg2 from "@/assets/background.jpg";
import "./Banner.scss"
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="sub_text">
                Consistency Is the Key To progress.
                </h5>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="Second slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                Don't Give Up!
                </h5>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
};

export default Banner;