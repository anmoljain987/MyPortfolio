import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import {
  SiHtml5,
  SiFirebase,
  SiNextdotjs,
  SiCss3,
  SiExpress,
  SiMaterialui,
} from "react-icons/si";

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="white-tech">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="white-tech">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="white-tech">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="white-tech">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div className="white-tech">Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="white-tech">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="white-tech">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="white-tech">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <div className="white-tech">Material UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="white-tech">Firebase</div>
      </Col>
    </Row>
  );
}

export default TechStack;
