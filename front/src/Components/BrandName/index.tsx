import { useState, useEffect } from "react";

import "./styles.css";
type Props = {
  animateText: string;
  delay: number;
  staticText: string;
  breakLine: boolean;
};

const BrandName: React.FC<Props> = ({
  animateText,
  staticText,
  breakLine,
  delay,
}) => {
  const [brandEffectIndex, setBrandEffectIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandEffectIndex(
        (currentIndex) =>
          (currentIndex + 1 + (animateText[currentIndex] === "\xA0" ? 1 : 0)) %
          (animateText.length + 1)
      );
    }, delay);

    return () => clearInterval(interval);
  }, [animateText, delay]);

  return (
    <span>
      <span className="color1">{staticText}</span>
      {breakLine ? <br /> : " - "}
      <span className="color1" onClick={() => (window.location.href = "/")}>
        {animateText.slice(0, brandEffectIndex)}
      </span>
      <span className="color2">{animateText.slice(brandEffectIndex)}</span>
    </span>
  );
};

export default BrandName;
