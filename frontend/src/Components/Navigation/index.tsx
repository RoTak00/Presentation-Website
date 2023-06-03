//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

import BrandName from "../BrandName";
import useMediaQuery from "../../Utils/MediaQuery";

type Props = {
  brand_text?: string;
  brand_delay?: number;
};
const NavigationBar: React.FC<Props> = ({ brand_text, brand_delay }) => {
  const lg = useMediaQuery("(min-width: 992px)");

  return (
    <div className="navbar-wrapper">
      <Row className="h-100">
        <Col xs={12} lg={6} className="brand">
          <BrandName
            text={brand_text ?? "Robert\xA0Takacs   "}
            delay={brand_delay ?? 250}
          />
        </Col>
      </Row>
    </div>
  );
};

export default NavigationBar;
