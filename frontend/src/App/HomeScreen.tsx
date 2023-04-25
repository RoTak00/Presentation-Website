import NavigationBar from "../Components/Navigation";
import ImageCarousel from "../Components/ImageCarousel";
import "./styles/HomeScreen.css";

import { CarouselImageType } from "../Utils/Types";

import { lipsum } from "../Utils/Types";
const HomeScreen = () => {
  const images: CarouselImageType[] = [
    { name: "1.jpeg", title: "Games of Science", description: lipsum },
    { name: "2.jpeg", title: "Volunteering", description: lipsum },
    { name: "3.jpeg", title: "Youth Leadership", description: lipsum },
    { name: "4.jpeg", title: "Rotaract Levant", description: lipsum },
    {
      name: "5.jpeg",
      title: "Inspiring",
      description: lipsum,
      position: "top",
    },
  ];
  return (
    <>
      <NavigationBar />
      <ImageCarousel images={images} />
    </>
  );
};

export default HomeScreen;
