import NavigationBar from "../Components/Navigation";
import ImageCarousel from "../Components/ImageCarousel";
import "./styles/HomeScreen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { CarouselImageType } from "../Utils/Types";
import ProjectMenu from "../Components/ProjectMenu";
import ContactMenu from "../Components/ContactMenu";
import ContactIcons from "../Components/ContactIcons";
import CustomFooter from "../Components/Footer";
import BrandName from "../Components/BrandName";
import GalleryMenu from "../Components/GalleryMenu";
import SideMenu from "../Components/SideMenu";
import useMediaQuery from "../Utils/MediaQuery";

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

  let dim = 0;
  if (useMediaQuery("(min-width: 576px)")) dim = 1;
  if (useMediaQuery("(min-width: 768px)")) dim = 2;
  if (useMediaQuery("(min-width: 992px)")) dim = 3;
  if (useMediaQuery("(min-width: 1200px)")) dim = 4;

  return (
    <div
      style={{
        backgroundImage: `url(/images/background.png)`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <ImageCarousel images={images} delay={2000}>
        <NavigationBar>
          <BrandName
            staticText={"Robert Takacs"}
            breakLine={dim < 1}
            animateText={"Web\xA0Developer  "}
            delay={250}
          />
          <SideMenu />
        </NavigationBar>
      </ImageCarousel>
      <ProjectMenu />
      <ContactMenu />
      <ContactIcons />
      <CustomFooter />
    </div>
  );
};

export default HomeScreen;
