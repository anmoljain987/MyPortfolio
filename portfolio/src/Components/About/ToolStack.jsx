import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiGithub,
} from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="white-tech">VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="white-tech">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="white-tech">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="white-tech">Herouku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="white-tech">Netlify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="white-tech">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNpm />
        <div className="white-tech">Npm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="circle">
          <AiOutlineThunderbolt />
        </div>

        <div className="white-tech">Thunder Client</div>
      </Col>
    </Row>
  );
}

export default ToolStack;
