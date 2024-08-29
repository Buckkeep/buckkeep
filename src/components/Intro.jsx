import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro() {
  return (
    <>
      <section id="intro">
        <Container>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-1">Black Belt</div>
                <div className="display-5 text-muted">Your Coding Skills</div>
              </h1>
              <p className="lead my-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, dignissimos?
              </p>
              <a href="#pricing" className="btn btn-secondary btn-lg">
                Buy Now
              </a>
            </div>
            <div className="col-md-5 text-center bg-secondary d-none d-md-block">
              <img className="img-fluid" src="assets/github.png" alt="GitHub Logo"/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Intro;
