import { useEffect } from 'react';

import { DEFAULT_DEBOUNCE_TIME } from '@/app/shared/constants';
import useDebounce from '@/app/shared/hooks/useDebounce';
import { breakpoints } from '@/app/shared/media';

type Breakpoint = keyof typeof breakpoints;

const getBreakpoint = (): Breakpoint => {
  const width = window.innerWidth;

  if (width >= breakpoints.desktopLarge) return 'desktopLarge';
  if (width >= breakpoints.desktop) return 'desktop';
  if (width >= breakpoints.tablet) return 'tablet';
  if (width >= breakpoints.tabletSmall) return 'tabletSmall';
  if (width >= breakpoints.mobile) return 'mobile';
  if (width >= breakpoints.mobileSmall) return 'mobileSmall';
  return 'xs';
};

const useMedia = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useDebounce<Breakpoint>(
    getBreakpoint(),
    DEFAULT_DEBOUNCE_TIME,
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return currentBreakpoint;
};

export default useMedia;
