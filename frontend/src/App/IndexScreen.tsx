import { Col, Row } from "react-bootstrap";

import NavBar from "./Components/NavBar";
import PhraseShowcase from "./Components/PhraseShowcase/PhraseShowcase";

const IndexScreen = () => {
  const words = ["Computer Science", "Web Development", "Other Shit"];
  return (
    <div>
      <Row>
        <Col xs="12" lg="2">
          <NavBar />
        </Col>
        <Col xs="12" lg="10">
          <div className="pt-xs-1 pt-lg-5">
            <h1 className="text-center" style={{ fontSize: "8vw" }}>
              <b>Takacs</b> Robert
            </h1>

            <div>
              <PhraseShowcase words={words} delay={5} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IndexScreen;
