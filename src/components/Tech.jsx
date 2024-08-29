import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Swift from "/public/assets/swiftlogo.png";
import HTML from "/public/assets/html.png";
import js from "/public/assets/javascript.png";
import reactlogo from "/public/assets/react.png";

function Tech() {
  return (
    <>
      <Container fluid>
        <Row className="mx-1">
          <Col xs={6} md={3}>
            <img src={Swift} alt="Swift" style={{ maxWidth: "10rem" }} className="mx-auto d-block"/>
          </Col>
          <Col xs={6} md={3}>
            <img src={HTML} alt="HTML 5" style={{ maxWidth: "10rem" }} className="mx-auto d-block"/>
          </Col>
          <Col xs={6} md={3}>
            <img src={js} alt="JavaScript" style={{ maxWidth: "10rem" }} className="mx-auto d-block"/>
          </Col>
          <Col xs={6} md={3}>
            <img src={reactlogo} alt="React" style={{ maxWidth: "10rem" }} className="mx-auto d-block"/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Tech;
