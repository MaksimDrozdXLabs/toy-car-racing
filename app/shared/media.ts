import { css, Interpolation, RuleSet } from 'styled-components';

export const breakpoints = {
  desktopLarge: 1440,
  desktop: 1280,
  tablet: 992,
  tabletSmall: 800,
  mobile: 600,
  mobileSmall: 375,
  xs: 335,
};

/*

  Usage:
  import { media } from 'theme'

  const SomeContainer = styled.div`

    ${media.tablet`
      // css for small devices
    `}
  `
*/

type Media = Record<
    keyof typeof breakpoints,
    // eslint-disable-next-line no-unused-vars
    <T extends object = object>(strings: TemplateStringsArray, ...interpolations: Interpolation<T>[]) => RuleSet<object>
>

const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;

export const media: Media = keys.reduce((acc, label) => {
  // @ts-expect-error: invalid Type
  acc[label] = (strings, ...interpolations: Interpolation<object>[]) => css`
        @media (max-width: ${breakpoints[label]}px) {
            ${css(strings, ...interpolations)};
        }
    `;
  return acc;
}, {} as Media);
