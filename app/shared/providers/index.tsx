'use client';

import React, { PropsWithChildren } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import StyledComponentsRegistry from '@/app/shared/providers/StyledComponentRegistry/StyledComponentsRegistry';
import theme from '@/app/shared/theme';

interface IAppProvidersProps extends PropsWithChildren {}

const AppProviders = ({ children }: IAppProvidersProps) => (
  <AppRouterCacheProvider>
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  </AppRouterCacheProvider>
);

export default AppProviders;
