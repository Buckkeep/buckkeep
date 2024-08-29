import React from "react";
import github from "/public/assets/github.png";
import linkedin from "/public/assets/linkedin.png";
import gmail from "/public/assets/google.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <>
      <section id="contact" className="bg-light my-5 ">
        <div className="container-lg">
          <h2>Contact Me</h2>
          <p className="lead text-muted">Get in touch!</p>
        </div>

        <Container className="justify-content-center align-items-center">
          <Row>
            <Col className="col-4">
              <Card className="bg-secondary justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  src={github}
                  style={{ maxWidth: "10rem" }}
                  className="p-3"
                />
                <Card.Body>
                  <Button variant="primary" href="https://github.com/Buckkeep">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-4">
              <Card  className="bg-secondary justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  src={linkedin}
                  style={{ maxWidth: "10rem" }}
                  className="p-3"
                />
                <Card.Body>
                  <Button variant="primary" href="https://www.linkedin.com/in/neeta-buhecha-2461a41a/">LinkedIn</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-4">
              <Card  className="bg-secondary justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  src={gmail}
                  style={{ maxWidth: "10rem" }}
                  className="p-3"
                />
                <Card.Body>
                  <Button variant="primary" disabled>Gmail</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
