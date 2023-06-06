const useFadeIn = (
  elementInView: boolean,
  triggerClass: string,
  animationClass: string
): string => {
  let classes = triggerClass;
  if (elementInView) {
    classes += ` ${animationClass}`;
  }
  return classes;
};

export default useFadeIn;
