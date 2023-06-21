//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Container3 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#7ac143",
      }}
    >
      <Row className="pt-5">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <h1
            className="display-1"
            style={{ fontFamily: "VideoType, sans-serif" }}
          >
            My plans as a Web Admin
          </h1>
        </Col>
      </Row>

      <Row className="pt-5 mx-5">
        <Col xs="12" lg="6">
          <h2
            className="display-2 pt-5"
            style={{ fontFamily: "VideoType, sans-serif" }}
          >
            Plans
          </h2>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Keep the website clean and user-friendly
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Keep the website up-to-date all the time
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Help the local board with tech-related objectives
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Keep ESN Students informed about our events
          </h3>
        </Col>
        <Col xs="12" lg="6">
          <h2
            className="display-2 pt-5"
            style={{ fontFamily: "VideoType, sans-serif" }}
          >
            Ideas
          </h2>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Help build an HR platform to generate volunteer documents.
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Build an e-mail newsletter for the ESN volunteers
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Build a web application for the task manager
          </h3>
          <h3 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Build a web application for points management
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default Container3;
