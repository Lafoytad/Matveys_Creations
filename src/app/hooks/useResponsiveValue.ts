import { useMediaQuery } from "react-responsive";

const useResponsiveValue = () => {
  const isMobileSmall = useMediaQuery({ query: "(max-width: 500px)" });
  const isMobile = useMediaQuery({
    query: "(min-width: 501px) and (max-width: 1000px)",
  });
  const isTabletSmall = useMediaQuery({
    query: "(min-width: 1001px) and (max-width: 1500px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1501px) and (max-width: 1800px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1801px)" });

  if (isMobileSmall) {
    return 0.2;
  } else if (isMobile) {
    return 0.4;
  } else if (isTabletSmall) {
    return 0.6;
  } else if (isTablet) {
    return 0.8;
  } else if (isDesktop) {
    return 1;
  }

  return 1;
};

export default useResponsiveValue;
