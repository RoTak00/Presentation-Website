//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

import BrandName from "../BrandName";
import useMediaQuery from "../../Utils/MediaQuery";

const NavigationBar = () => {
  const lg = useMediaQuery("(min-width: 992px)");

  return (
    <div className="navbar-wrapper">
      <Row className="h-100">
        <Col xs={12} lg={3} className="brand">
          <BrandName text={"Robert\xA0Takacs   "} delay={250} />
        </Col>
      </Row>
    </div>
  );
};

export default NavigationBar;
