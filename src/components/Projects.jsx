import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';

function Projects() {
  return (
    <>
      <section id="projects">
        <Container className="my-3">
        <h2 className="display-5">Projects</h2>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="project1" title="Project One">
            Project one coming soon...
          </Tab>
          <Tab eventKey="project2" title="Project Two">
            Project Two coming soon...
          </Tab>
          <Tab eventKey="project3" title="Project Three">
            Project Three coming soon...
          </Tab>
        </Tabs>
        </Container>
      </section>
    </>
  );
}

export default Projects;
