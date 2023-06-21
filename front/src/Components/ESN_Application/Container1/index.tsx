//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Container1 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#00aeef",
      }}
    >
      <Row className="pt-5">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <h1
            className="display-1 text-black"
            style={{ fontFamily: "VideoType, sans-serif" }}
          >
            Who am I?
          </h1>
        </Col>
      </Row>

      <Row className="pt-5 mx-5">
        <Col xs="12" lg="8">
          <h2 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Student at UniBuc - Computer Science and IT
          </h2>
          <h2 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Member of ESN UniBucharest since the beginning of 2023
          </h2>
          <h2 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Passionate about web development and everything techy
          </h2>
          <h2 style={{ fontFamily: "VideoType, sans-serif" }} className="py-5">
            Maybe your next Web Administrator?
          </h2>
        </Col>
        <Col
          xs="12"
          lg="4"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="/images/esn-presentation-photo.png"
            alt="Takacs Robert - Diploma"
            style={{
              width: "80%",
              borderRadius: "250px",
            }}
          ></img>
        </Col>
      </Row>
    </div>
  );
};

export default Container1;
