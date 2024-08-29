import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import bgred from "/public/assets/bgred.png";
import HTML from "/public/assets/html.png";
import reactlogo from "/public/assets/react.png";

function About() {
  return (
    <>
      <section id="about">
        <Container className="my-3">
          <h2 className="display-5">Things I Like</h2>
          <Carousel>
            <Carousel.Item>
                <img src={bgred} style={{maxHeight: "50rem"}} alt="Javascript" text="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={bgred} style={{maxHeight: "50rem"}} alt="Javascript" text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={bgred} style={{maxHeight: "50rem"}}  alt="Javascript" text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default About;
