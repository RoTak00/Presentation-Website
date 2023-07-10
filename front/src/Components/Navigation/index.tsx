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
      <div className="brand">{children}</div>

      {/*<div className="navbar-effect"></div>*/}
    </div>
  );
};

export default NavigationBar;
