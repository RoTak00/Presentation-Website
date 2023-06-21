import { useRef } from "react";
import "./styles.css";
import { Col, Row } from "react-bootstrap";
import useIsInViewport from "../../Utils/IsInViewport";
import useFadeIn from "../../Utils/fadeIn";

const ContactIcons = () => {
  const iconsRef = useRef(null);
  const titleRef = useRef(null);

  const isRowInViewport = useIsInViewport(iconsRef);
  const isTitleInViewport = useIsInViewport(titleRef);

  const iconFadeInClasses = useFadeIn(
    isRowInViewport,
    "toFadeIn",
    "fadingInBottom"
  );
  const titleFadeInClasses = useFadeIn(
    isTitleInViewport,
    "toFadeIn",
    "fadingInSimple zoomBigSmall"
  );

  return (
    <>
      <Row className="contact-icons-title-row">
        <Col xs="12">
          <h2 ref={titleRef} className={titleFadeInClasses}>
            Find me on these platforms!
          </h2>
        </Col>
      </Row>
      <Row className="contact-icons-wrapper" ref={iconsRef}>
        <Col xs="4">
          <a
            href="https://github.com/RoTak00"
            target="_blank"
            rel="noreferrer noindex nofollow"
            className={iconFadeInClasses}
            style={{ animationDelay: "0.2s" }}
          >
            <img src="/icons/git.png" alt="Github" />
          </a>
        </Col>
        <Col xs="4">
          <a
            href="https://instagram.com/rotak__/"
            target="_blank"
            rel="noreferrer noindex nofollow"
            className={iconFadeInClasses}
            style={{ animationDelay: "0.4s" }}
          >
            <img src="/icons/ig.png" alt="Instagram" />
          </a>
        </Col>
        <Col xs="4">
          <a
            href="https://www.linkedin.com/in/robertrotaktakacs/"
            target="_blank"
            rel="noreferrer noindex nofollow"
            className={iconFadeInClasses}
            style={{ animationDelay: "0.6s" }}
          >
            <img src="/icons/in.png" alt="Linkedin" />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ContactIcons;
