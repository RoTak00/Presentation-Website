import { useState, useMemo, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const mediaQuery: MediaQueryList = useMemo(
    () => window.matchMedia(query),
    [query]
  );
  const [match, setMatch] = useState<Boolean>(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
};

export default useMediaQuery;
