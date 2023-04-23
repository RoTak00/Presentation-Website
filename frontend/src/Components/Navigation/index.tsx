import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

import SideMenu from "../SideMenu";
import useMediaQuery from "../../Utils/MediaQuery";

const NavigationBar = () => {
  const brandText = "Takacs\xA0Robert";
  const [brandEffectIndex, setBrandEffectIndex] = useState<number>(0);

  const lg = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    const interval = setInterval(
      () =>
        setBrandEffectIndex(
          (currentIndex) =>
            (currentIndex + 1 + (brandText[currentIndex] === "\xA0" ? 1 : 0)) %
            (brandText.length + 1)
        ),
      250
    );

    return () => clearInterval(interval);
  }, [brandText]);

  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [sideMenuLocked, setSideMenuLocked] = useState<boolean>(false);
  const handleMenuButtonMouseEnter = () => {
    if (sideMenuOpen === false) setSideMenuOpen(true);
  };

  const handleMenuClick = () => {
    if (sideMenuOpen === true && sideMenuLocked === true)
      setSideMenuOpen(false);
    setSideMenuLocked((lockSideMenu) => !lockSideMenu);
  };

  const handleMenuButtonMouseLeave = () => {
    if (sideMenuOpen === true && sideMenuLocked === false)
      setSideMenuOpen(false);
  };

  let lgExtraOutput = <></>;
  if (lg) {
    lgExtraOutput = (
      <div className="lg-wrapper">
        <Row className="h-100">
          <Col lg="3" className="brand">
            <span className="color1">
              {brandText.slice(0, brandEffectIndex)}
            </span>
            <span className="color2">{brandText.slice(brandEffectIndex)}</span>
          </Col>
        </Row>
      </div>
    );
  }

  // xs

  return (
    <>
      {lgExtraOutput}
      <div
        className={"xs-wrapper " + (sideMenuLocked ? "locked " : "")}
        onMouseLeave={handleMenuButtonMouseLeave}
      >
        <div
          className="button"
          onMouseEnter={handleMenuButtonMouseEnter}
          onClick={handleMenuClick}
        >
          {sideMenuOpen ? "+" : "="}
        </div>
        {sideMenuOpen ? (
          <SideMenu
            handleMouseOut={handleMenuButtonMouseLeave}
            locked={sideMenuLocked}
          />
        ) : null}
      </div>
    </>
  );
};

export default NavigationBar;
