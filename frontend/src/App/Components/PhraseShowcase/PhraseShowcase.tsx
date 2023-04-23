import { useState } from "react";
import { useEffect } from "react";

type Props = {
  words: string[];
  delay: number;
};

const PhraseShowcase: React.FC<Props> = ({ words, delay }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progressBarWidth, setProgressBarWidth] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length),
      delay * 1000
    );

    return () => clearInterval(interval);
  }, [words, delay]);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setProgressBarWidth((progressBarWidth) => (progressBarWidth + 1) % 200),
      delay * 5
    );

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "4vw",
          fontSize: "2vw",
          border: "1px solid black",
        }}
      >
        {words[currentIndex]}
        <div
          style={{
            position: "absolute",
            width: `${
              progressBarWidth > 100 ? 200 - progressBarWidth : progressBarWidth
            }%`,
            height: "calc(4vw - 2px)",
            top: 0,
            left: 0,
            background: "white",
            borderRight: "5px solid black",
          }}
        ></div>
      </div>
    </>
  );
};

export default PhraseShowcase;
