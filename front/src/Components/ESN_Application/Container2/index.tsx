//import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Container2 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000000",
      }}
    >
      <Row className="pt-5">
        <Col
          xs="12"
          className="d-flex align-items-center justify-content-center"
        >
          <h1
            className="display-1"
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
          >
            My Web Development Journey
          </h1>
        </Col>
      </Row>

      <Row className="pt-5 mx-5">
        <Col xs="12" lg="6">
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2018{" "}
            <span className="text-white">
              - Started Mathematics-Informatics in High School, Bistrița
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2021{" "}
            <span className="text-white">
              - Joined GTABase and learned to use Joomla! as a CMS, learnt Web
              Scraping and Database Administration
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2021{" "}
            <span className="text-white">
              - Learnt PHP, jQuery and began creating websites and web
              applications{" "}
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2022{" "}
            <span className="text-white">
              - Launched{" "}
              <a href="https://www.rotak.ro" style={{ color: "inherit" }}>
                rotak.ro
              </a>
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2022{" "}
            <span className="text-white">
              - Built a presentation website for{" "}
              <a
                href="https://www.ingroconsult.ro"
                style={{ color: "inherit" }}
              >
                ingroconsult.ro
              </a>
            </span>
          </h2>
        </Col>
        <Col xs="12" lg="6">
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2022{" "}
            <span className="text-white">
              - Began studying at the University of Bucharest, Computers and
              Information Technology
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2022{" "}
            <span className="text-white">
              - Learnt React.JS for Web Applications{" "}
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2022{" "}
            <span className="text-white">
              - Learnt PHP Laravel for backend development
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2023{" "}
            <span className="text-white">
              - Joined{" "}
              <a
                href="https://www.creativemotion.io"
                style={{ color: "inherit" }}
              >
                Creative Motion
              </a>{" "}
              as a frontend web developer
            </span>
          </h2>
          <h2
            style={{ fontFamily: "VideoType, sans-serif", color: "#ec008c" }}
            className="py-4"
          >
            2023{" "}
            <span className="text-white">
              - Applied for Web Admin at ESN UniBucharest
            </span>
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default Container2;
