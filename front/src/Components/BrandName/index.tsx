import { useState, useEffect } from "react";

import "./styles.css";
type Props = {
  text: string;
  delay: number;
};

const BrandName: React.FC<Props> = ({ text, delay }) => {
  const [brandEffectIndex, setBrandEffectIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandEffectIndex(
        (currentIndex) =>
          (currentIndex + 1 + (text[currentIndex] === "\xA0" ? 1 : 0)) %
          (text.length + 1)
      );
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <>
      <span className="color1" onClick={() => (window.location.href = "/")}>
        {"Robert Takacs\xA0"+text.slice(0, brandEffectIndex)}
      </span>
      <span className="color2">{text.slice(brandEffectIndex)}</span>
    </>
  );
};

export default BrandName;
