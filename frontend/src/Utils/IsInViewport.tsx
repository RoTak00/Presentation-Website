import { useState, useMemo, useEffect } from "react";

const useIsInViewport: (
  ref: React.MutableRefObject<HTMLElement | null>
) => boolean = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        {
          threshold: 0.1,
          rootMargin: "0px 0px 0px 1000px",
        }
      ),
    []
  );

  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInViewport;
