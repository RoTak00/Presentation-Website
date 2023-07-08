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
    <div
      style={{
        backgroundImage: `url(/images/background.png)`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <ImageCarousel images={images} delay={2000}>
        <NavigationBar>
          <BrandName text={"-\xA0Web\xA0Developer  "} delay={250} />
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
