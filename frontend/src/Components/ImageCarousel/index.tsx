import { useState, useEffect, useRef } from "react";

import "./styles.css";

import { CarouselImageType } from "../../Utils/Types";

type Props = {
  images: CarouselImageType[];
  delay?: number;
};

const ImageCarousel: React.FC<Props> = ({ images, delay }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [textVisible, setTextVisible] = useState<boolean>(false);

  const showTextAfterStartInterval = useRef<NodeJS.Timeout | null>(null);

  /*const [intervalPaused, setIntervalPaused] = useState<boolean>(false);
  let loadingBarInterval: React.MutableRefObject<NodeJS.Timer | undefined> =
    useRef(undefined);
  let imageInterval: React.MutableRefObject<NodeJS.Timer | undefined> =
    useRef(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!intervalPaused)
        setCurrentImageIndex((index) => (index + 1) % images.length);
    }, delay);

    imageInterval.current = interval;

    return () => {
      clearInterval(imageInterval.current);
    };
  }, [images, delay, intervalPaused]);

  const [loadingBarWidth, setLoadingBarWidth] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!intervalPaused) setLoadingBarWidth((w) => (w + 1) % 100);
    }, delay / 100);

    loadingBarInterval.current = interval;

    return () => {
      clearInterval(loadingBarInterval.current);
    };
  }, [delay, intervalPaused]);*/

  //show text after 2 seconds (maybe the user doesn't know they can see it)
  useEffect(() => {
    showTextAfterStartInterval.current = setTimeout(() => {
      setTextVisible(true);
    }, 2000);
  });

  const getImageSrc = (name: string) => {
    return "/images/" + name;
  };

  return (
    <div className="carousel">
      <img
        src={getImageSrc(images[currentImageIndex].name)}
        alt=""
        className="image"
        onClick={() => setTextVisible((old) => !old)}
        style={{ objectPosition: images[currentImageIndex].position }}
      />

      <div className="arrowLeft">
        <span
          onClick={() => {
            setTextVisible(false);
            setCurrentImageIndex((old) =>
              old === 0 ? images.length - 1 : (old - 1) % images.length
            );
          }}
        >
          &lt;
        </span>
      </div>
      <div className="arrowRight">
        <span
          onClick={() => {
            setTextVisible(false);
            setCurrentImageIndex((old) => (old + 1) % images.length);
          }}
        >
          &gt;
        </span>
      </div>

      {textVisible ? (
        <>
          <div
            className="description-text"
            onClick={() => {
              setTextVisible((old) => !old);
              if (showTextAfterStartInterval.current !== null)
                clearInterval(showTextAfterStartInterval.current);
            }}
          >
            <div className="inner">
              <h2>{images[currentImageIndex].title}</h2>
              <div className="description">
                {images[currentImageIndex].description}
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/*<div
        className="loadingBar"
        style={{ width: loadingBarWidth.toString() + "%" }}
  ></div>*/}
    </div>
  );
};

export default ImageCarousel;
