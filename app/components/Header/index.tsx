import React from 'react';
import { Link } from '@mui/material';
import { usePathname } from 'next/navigation';

import Button from '@/app/components/shared/Button';
import { UserProfileHeader } from '@/app/components/UserProfileHeader';
import LiveIcon from '@/app/shared/assets/icons/live.svg';
import Logo from '@/app/shared/assets/icons/logo.svg';
import { appRoutes } from '@/app/shared/constants/routes';

import { HeaderLinks, HeaderWrapper, LogoContainer } from './style';

const pages = [
  {
    title: 'Dashboard',
    href: `${appRoutes.dashboard}`,
  },
  {
    title: 'Live',
    href: `${appRoutes.live}`,
    icon: <LiveIcon />,
  },
  {
    title: 'Races',
    href: `${appRoutes.races}`,
  },
  {
    title: 'Drivers',
    href: `${appRoutes.drivers}`,
  },
];

export const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeaderLinks>
        {pages.map(({ href, title, icon }) => (
          <Button
            component={Link}
            href={href}
            textTransform="capitalize"
            fontWeight="500"
            key={href}
            $isActive={isActive(href)}
          >
            {title}
            {icon}
          </Button>
        ))}
      </HeaderLinks>
      <UserProfileHeader />
    </HeaderWrapper>
  );
};
