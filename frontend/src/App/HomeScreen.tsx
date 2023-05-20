import NavigationBar from "../Components/Navigation";
import ImageCarousel from "../Components/ImageCarousel";
import "./styles/HomeScreen.css";

import { CarouselImageType } from "../Utils/Types";
import { lipsum } from "../Utils/Types";
import ProjectMenu from "../Components/ProjectMenu";
import ContactMenu from "../Components/ContactMenu";

const HomeScreen = () => {
  const images: CarouselImageType[] = [
    { imageName: "1.jpeg", title: "Games of Science", description: lipsum },
    { imageName: "2.jpeg", title: "Volunteering", description: lipsum },
    { imageName: "3.jpeg", title: "Youth Leadership", description: lipsum },
    { imageName: "4.jpeg", title: "Rotaract Levant", description: lipsum },
    {
      imageName: "5.jpeg",
      title: "Inspiring",
      description: lipsum,
      imagePosition: "top",
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
        <ImageCarousel images={images} />
        <ProjectMenu />
        <ContactMenu />
      </div>
    </>
  );
};

export default HomeScreen;
