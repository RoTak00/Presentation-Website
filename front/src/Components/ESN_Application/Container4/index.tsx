//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Container4 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#2e3192",
      }}
    >
      <Row className="pt-5">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <h1
            className="display-1"
            style={{ fontFamily: "VideoType, sans-serif", color: "#00aeef" }}
          >
            Thank you so much!
          </h1>
        </Col>
      </Row>
      <Row className="h-75 d-flex justify-content-center align`npm-items-center">
        <img
          src="/images/esn.png"
          alt="ESN Logo"
          style={{ width: "60vh", height: "60vh" }}
        ></img>
      </Row>
    </div>
  );
};

export default Container4;
