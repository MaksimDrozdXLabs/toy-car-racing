import React, { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import AppProviders from '@/app/shared/providers';

import './globals.css';

interface IRootLayoutProps extends PropsWithChildren {
}

export const metadata: Metadata = {
  title: 'Computer Vision',
  robots: 'all',
};
export default function RootLayout({
  children,
}: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
