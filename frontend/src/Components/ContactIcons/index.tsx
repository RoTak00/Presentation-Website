import "./styles.css";
import { Col, Row } from "react-bootstrap";

const ContactIcons = () => {
  return (
    <>
      <Row className="contact-icons-title-row">
        <Col xs="12">
          <h2>Find me on these platforms!</h2>
        </Col>
      </Row>
      <Row className="contact-icons-wrapper">
        <Col xs="4">
          <a
            href="https://github.com/RoTak00"
            target="_blank"
            rel="noreferrer noindex nofollow"
          >
            <img src="/icons/github.png" alt="Github" />
          </a>
        </Col>
        <Col xs="4">
          <a
            href="https://instagram.com/rotak__/"
            target="_blank"
            rel="noreferrer noindex nofollow"
          >
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
        </Col>
        <Col xs="4">
          <a
            href="https://www.linkedin.com/in/robertrotaktakacs/"
            target="_blank"
            rel="noreferrer noindex nofollow"
          >
            <img src="/icons/linkedin.png" alt="Linkedin" />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ContactIcons;
