//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

type Props = {
  children?: React.ReactNode;
  isBlock?: boolean;
};
const NavigationBar: React.FC<Props> = ({ children, isBlock }) => {
  //const lg = useMediaQuery("(min-width: 992px)");

  return (
    <div
      className="navbar-wrapper"
      style={isBlock ? { position: "relative", height: "auto" } : {}}
    >
      <Row className="h-100">
        <Col xs={12} lg={6} className="brand">
          {children}
        </Col>
      </Row>

      {/*<div className="navbar-effect"></div>*/}
    </div>
  );
};

export default NavigationBar;
