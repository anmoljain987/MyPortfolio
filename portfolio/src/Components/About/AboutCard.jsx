import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anmol Jain </span>
            from <span className="purple"> Ambala City, Haryana, India.</span>
            <br />I am a Full Stack Web Devoloper from Masai School, Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Simplicity is the soul of efficency"
          </p>
          <footer className="blockquote-footer">Austin Freeman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
