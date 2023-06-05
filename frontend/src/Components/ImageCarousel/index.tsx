import { useState, useRef, useEffect } from "react";

import "./styles.css";

import { CarouselImageType } from "../../Utils/Types";

type Props = {
  images: CarouselImageType[];
  delay: number;
};

const ImageCarousel: React.FC<Props> = ({ images, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  let imageInterval: React.MutableRefObject<NodeJS.Timer | undefined> =
    useRef(undefined);

  useEffect(() => {
    const intervalImageSwap = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, delay);

    imageInterval.current = intervalImageSwap;

    return () => {
      clearInterval(imageInterval.current);
    };
  }, [delay, images]);

  const getImageSrc = (name: string) => {
    return "/images/" + name;
  };

  const imagesJSX = images.map((image, index) => {
    let classes = "image ";
    if (index !== currentImageIndex) classes += "nodisplay ";
    else classes += "image--fadein";

    return (
      <img
        key={`image-${index}`}
        src={getImageSrc(image.imageName ?? "")}
        alt=""
        className={classes}
        style={{ objectPosition: image.imagePosition }}
      />
    );
  });

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">{imagesJSX}</div>

      <div className="carousel-brand">
        <img src={getImageSrc("Logo-glow.png")} width="400" alt="" />
      </div>
    </div>
  );
};

export default ImageCarousel;
