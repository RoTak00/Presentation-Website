import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const ContactMenu = () => {
  return (
    <>
      <Row className="contact-title-row">
        <Col xs="12">
          <h2>Let's get in touch!</h2>
        </Col>
      </Row>
      <Container>
        <Row className="contact-form-wrapper">
          <Col xs="12" lg="6">
            test
          </Col>
          <Col xs="12" lg="6">
            test
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMenu;
