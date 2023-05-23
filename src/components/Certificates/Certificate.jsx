import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCard";
import Particle from "../Particle";
import port from "../../Assets/Certificate/python.png";
import cert1 from "../../Assets/elevorpost.jpg"
import cert2 from "../../Assets/leap.jpg"

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certification & <strong className="purple"> Achievements </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <CertificateCards
              imgPath={port}
              isBlog={false}
              title="Python Certification"
              description="Basic Python Certification by Hackerrank.It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"
              link="https://www.hackerrank.com/certificates/131cece338ad"
            />
            
            
          </Col>
        <Col md={4} className="project-card">
            <CertificateCards
              imgPath={cert2}
              isBlog={false}
              title="LEAP Certificate by IIT Madras Incubation Cell"
              description="Learn Engineering through Activity Program is an initative by IIT Madras Incubation Cell which is aimed to find individuals with new ideas and to help them to implement that and create a project based on that. Our team made an Automatic Headlight dimmer with OpenCv and Python which was appreciated by the IITM Incubation Cell."
              link={cert2}
            />
            
            
          </Col>
        <Col md={4} className="project-card">
            <CertificateCards
              imgPath={cert1}
              isBlog={false}
              title="Elever Portfolio Web development Competation"
              isPost
              description="Elevar is a set of tasks which was coordinated by IEEE CS Kerala Chapter. Web Designing competation was one of them. I secured first prize in web designing competation."
              link={cert1}
            />
            
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;