//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

import useMediaQuery from "../../Utils/MediaQuery";

const CustomFooter = () => {
  const lg = useMediaQuery("(min-width: 992px)");

  return (
    <div className="footer-wrapper">
      <Row className="h-100">
        <Col xs="6">Created by Takacs Robert</Col>
        <Col xs="6">All rights reserved {new Date().getFullYear()}</Col>
      </Row>
    </div>
  );
};

export default CustomFooter;
