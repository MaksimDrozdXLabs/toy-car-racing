import React from 'react';
import { Box } from '@mui/material';

import { Link } from '@/app/components/Link';
import Logo from '@/app/shared/assets/icons/logo.svg';

import { FooterLinksWrapper, FooterWrapper } from './style';

const footerLinks = [
  { text: 'Terms & Conditions', href: '/' },
  { text: 'Privacy Policy', href: '/' },
  { text: 'Cookie Policy', href: '/' },
];

export const Footer = () => (
  <FooterWrapper>
    <FooterLinksWrapper>
      {footerLinks.map(({ href, text }) => (
        <Link
          href={href}
          key={text}
        >
          {text}
        </Link>
      ))}
    </FooterLinksWrapper>
    <Box mx={2}>

      <Logo
        style={{ filter: 'invert(59%) sepia(3%) saturate(15%) hue-rotate(337deg) brightness(97%) contrast(88%)' }}
      />
    </Box>
  </FooterWrapper>
);
