import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiGitlab,
  SiFirebase,
  SiGit,
  SiAndroidstudio,
  SiJupyter,
  SiKaggle
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle/>
      </Col>
    </Row>
  );
}

export default ToolStack;
