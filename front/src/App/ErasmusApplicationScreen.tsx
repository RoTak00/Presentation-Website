import NavigationBar from "../Components/Navigation";
import "./styles/ErasmusApplicationScreen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import CustomFooter from "../Components/Footer";
import Container1 from "../Components/ESN_Application/Container1";
import Container2 from "../Components/ESN_Application/Container2";
import Container3 from "../Components/ESN_Application/Container3";
import Container4 from "../Components/ESN_Application/Container4";
import Container0 from "../Components/ESN_Application/Container0";
import BrandName from "../Components/BrandName";
import useMediaQuery from "../Utils/MediaQuery";

const ErasmusApplicationScreen = () => {
  let dim = 0;
  if (useMediaQuery("(min-width: 576px)")) dim = 1;
  if (useMediaQuery("(min-width: 768px)")) dim = 2;
  if (useMediaQuery("(min-width: 992px)")) dim = 3;
  if (useMediaQuery("(min-width: 1200px)")) dim = 4;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/background.png)`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <NavigationBar>
          <BrandName
            staticText={"Robert Takacs"}
            breakLine={dim < 1}
            animateText={"Web\xA0Developer  "}
            delay={250}
          />
        </NavigationBar>

        <Container0 />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <CustomFooter />
      </div>
    </>
  );
};

export default ErasmusApplicationScreen;
