import React from 'react';
import { Metadata } from 'next';

import Live from '@/app/components/Live';
import { content } from '@/app/shared/data/content';

export const metadata: Metadata = {
  title: content.pages.live?.title,
  description: content.pages.live?.subtitle,
  openGraph: {
    title: content.pages.live?.title,
    description: content.pages.live?.subtitle,
    type: 'website',
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
  },
};

const LivePage = () => <Live />;

export default LivePage;
