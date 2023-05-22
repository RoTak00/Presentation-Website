import NavigationBar from "../Components/Navigation";
import ImageCarousel from "../Components/ImageCarousel";
import "./styles/HomeScreen.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { CarouselImageType } from "../Utils/Types";
import ProjectMenu from "../Components/ProjectMenu";
import ContactMenu from "../Components/ContactMenu";
import ContactIcons from "../Components/ContactIcons";
import CustomFooter from "../Components/Footer";

const HomeScreen = () => {
  const images: CarouselImageType[] = [
    {
      imageName: "carousel-personal.jpg",
      title: "Who am I?",
      description: `Well, then, since you ask. I'm Takacs Robert, a Romanian student who moved to Bucharest to pursue higher education after finishing high school. My passion lies in exploring various activities and projects, ranging from computer science to volunteering and motorsports.
      <br>As a computer science enthusiast, I constantly seek opportunities to expand my knowledge and skills in this dynamic field. From coding to problem-solving, I find great satisfaction in harnessing the power of technology to create innovative solutions.
      <br>Beyond academics, I believe in the importance of giving back to the community. Through volunteering, I aim to make a positive impact and contribute to causes that align with my values.    
      <br>Motorsports have always held a special place in my heart. The adrenaline rush, precision driving, and the spirit of competition combine to create an electrifying experience that I can't resist.
      <br>Through this website, I invite you to join me on my journey of exploration and growth. Click the arrow on the right to find out more about me!`,
    },
    {
      imageName: "carousel-tech.jpg",
      title: "All things techy",
      description: `I can call Computer science my true passion.
      Currently pursuing a degree in Computers and Information Technology at the University of Bucharest,
      I was accepted with a near-perfect mark, reflecting my dedication and aptitude for this discipline.
      <br>My journey into the world of computer science began in 2020,
      and it was during this time that my interest in website development ignited.
      Collaborating with the team at GTABase, I immersed myself in the intricacies of web development.
      Today, I am fluent in a wide range of web technologies,
      including React.JS, PHP Laravel, HTML5, CSS3, and JavaScript in the Web Stack.
      <br>However, my passion for computers extends beyond web development.
      I find myself equally drawn to the domain of hardware programming. 
      The idea of creating physical devices that can be used in real life is an extremely interesting topic for me and I plan to specialize
      in this field. 
      <br>I am eager to expand my knowledge and skill set, and am always on the lookout to better myself in everything I do.`,
    },
    {
      imageName: "carousel-public-speech.jpg",
      title: "Desire to Inspire",
      description: `I absolutely love speaking in public and being on stage.
      It gives me a rush to share topics that genuinely interest me and share the knowledge and experiences
      I've gained. Making my voice heard and connecting with others is important to me,
      so I'm determined to improve my stage presence. I enjoy discussing the significance of volunteering,
      leveraging science for a better life, and raising awareness about the world's problems.<br>Through public speaking,
      I aim to inspire and spark conversations that lead to positive change. `,
    },
    {
      imageName: "carousel-volunteering.png",
      title: "Service above Self",
      description: `I'm thrilled to be a part of the Rotarian Family and
      proudly belong to the Rotaract Bucharest Levant club.
      Volunteering with this amazing group has had a profound impact on my life, helping me grow in so many ways.
      <br>Being part of the Rotaract club has made me a better team player,
      sharpening my ability to collaborate and make my voice heard.
      It's incredible how working together can accomplish great things, and I've learned the true power of unity.
      <br>Volunteering alongside the Rotary Family has been incredibly fulfilling.
      I've had the chance to create meaningful projects and activities that directly benefit our community.
      Helping others and seeing the positive impact we can make has given me a sense of accomplishment like no other.
      Through this experience, I've developed a deeper understanding of empathy and compassion.
      It's taught me to truly listen and meet the needs of others,
      finding innovative ways to make a difference. I'm dedicated to
      continuing my journey with the Rotaract Bucharest Levant club, spreading as much goodness as I can in the world.
      Together, we'll create impactful projects, support those in need, and foster a spirit of positive change.
      I can't wait to see what more we can achieve!"`,
    },
    {
      imageName: "carousel-future.jpg",
      title: "A better Future",
      description: `In the future, I wish to see the world become a better place. I know that through my activity, and by
      teaming up with people that have the same motivation and values as myself, we can do this. I'd love to see less hate in the world,
      I'd love to see no wars. I'd love to see an inclusive and loving community. Maybe this cannot be done in a man's lifetime, but I'm
      sure that bricks can be layed down on the path to making the world a better place. <br>Will you join me in my journey?
      `,
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
        <ContactIcons />
        <CustomFooter />
      </div>
    </>
  );
};

export default HomeScreen;
