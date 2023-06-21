import NavigationBar from "../Components/Navigation";
import "./styles/ErasmusApplicationScreen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import CustomFooter from "../Components/Footer";
import Container1 from "../Components/ESN_Application/Container1";
import Container2 from "../Components/ESN_Application/Container2";
import Container3 from "../Components/ESN_Application/Container3";
import Container4 from "../Components/ESN_Application/Container4";
import Container0 from "../Components/ESN_Application/Container0";

const ErasmusApplicationScreen = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/background.png)`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <NavigationBar
          brand_text={"ESN\xA0UniBucharest\xA0-\xA0Takacs Robert   "}
          brand_delay={150}
        />

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
