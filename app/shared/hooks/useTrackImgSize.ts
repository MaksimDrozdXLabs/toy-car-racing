import useMedia from '@/app/shared/hooks/useMedia';

export const useTrackImgSize = (defaultSize: number = 335) => {
  const breakpoint = useMedia();

  const fieldWidth: Record<string, number> = {
    desktopLarge: 890,
    desktop: 761,
    tablet: 640,
    tabletSmall: 840,
    mobile: 740,
    xs: 335,
  };

  return { fieldWidth: fieldWidth[breakpoint] || defaultSize };
};
