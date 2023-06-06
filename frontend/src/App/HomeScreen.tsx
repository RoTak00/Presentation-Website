import NavigationBar from "../Components/Navigation";
import ImageCarousel from "../Components/ImageCarousel";
import "./styles/HomeScreen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { CarouselImageType } from "../Utils/Types";
import ProjectMenu from "../Components/ProjectMenu";
import ContactMenu from "../Components/ContactMenu";
import ContactIcons from "../Components/ContactIcons";
import CustomFooter from "../Components/Footer";
import { API_PATH } from "../Utils/Helpers";

const HomeScreen = () => {
  const images: CarouselImageType[] = [
    {
      imageName: "carousel-new-1.jpg",
    },
    {
      imageName: "carousel-new-2.jpg",
    },
    {
      imageName: "carousel-tech.jpg",
    },

    {
      imageName: "carousel-new-4.jpg",
    },
    {
      imageName: "carousel-future.jpg",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/background.png)`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <NavigationBar />
        <ImageCarousel images={images} delay={2000} />
        <ProjectMenu />
        <ContactMenu />
        <ContactIcons />
        <CustomFooter />
      </div>
    </>
  );
};

export default HomeScreen;
