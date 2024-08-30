'use client';

import React, { PropsWithChildren } from 'react';

import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default MainLayout;
