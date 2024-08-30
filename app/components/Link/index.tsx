import React, { FC, ReactNode } from 'react';
import { LinkProps as MuiLinkProps } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { StyledLink } from './style';

type StyledLinkProps = NextLinkProps &
  MuiLinkProps & {
    children: ReactNode;
  };

export const Link: FC<StyledLinkProps> = ({ href, children, ...props }) => (
  <NextLink href={href} passHref legacyBehavior>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
);
