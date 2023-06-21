//import { useState } from "react";
import { Row } from "react-bootstrap";

import "./styles.css";

const Container0 = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        width: "100%",
        backgroundColor: "#2e3192",
      }}
    >
      <Row className="h-100 d-flex justify-content-center align-items-center nogutter">
        <h1
          className="display-1 text-center"
          style={{ fontFamily: "VideoType, sans-serif", color: "#ffffff" }}
        >
          Hello ESN UniBucharest!
        </h1>
      </Row>
    </div>
  );
};

export default Container0;
