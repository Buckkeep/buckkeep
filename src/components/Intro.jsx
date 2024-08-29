import React from "react";
import Container from 'react-bootstrap/Container';

function Intro() {
  return (
    <>
      <section id="home" className="my-5">
        <Container>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1>
                <div className="display-1">@Buckkeep</div>
                <div className="display-5 text-muted">Coding is my thing</div>
              </h1>
              <p className="lead my-4 text-muted">
                London. Languages. Literature.
              </p>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </a>
            </div>
            <div className="col-md-5 text-center bg-secondary d-none d-md-block">
              <img className="img-fluid" src="assets/icon.png" alt="Castle Icon"/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Intro;
