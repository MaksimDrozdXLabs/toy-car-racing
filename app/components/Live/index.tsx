'use client';

import React from 'react';

import { DriftFieldWithWebSocket } from '@/app/components/DriftFieldWithWebSocket';
import Video from '@/app/components/Video';

import { DriftFieldWrapper, LivePageWrapper, MainContainer } from './style';

const Live = () => (
  <LivePageWrapper>
    <MainContainer>
      <Video />
      <DriftFieldWrapper>
        <DriftFieldWithWebSocket />
        {/* <DriftFieldWithJson currentTime={currentTime} /> */}
      </DriftFieldWrapper>
    </MainContainer>
  </LivePageWrapper>
);

export default Live;
