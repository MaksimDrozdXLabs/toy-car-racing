'use client';

import React, { useState } from 'react';

import { DriftFieldWithJson } from '@/app/components/FootballFieldWithJson';
import { DriftFieldWithWebSocket } from '@/app/components/DriftFieldWithWebSocket';
import Video from '@/app/components/Video';
import { defaultVideoOptions } from '@/app/shared/data/videoData';

import { DriftFieldWrapper, LivePageWrapper, MainContainer } from './style';

const Live = () => {
  const [markers] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  return (
    <LivePageWrapper>
      <MainContainer>
        <Video
          sources={defaultVideoOptions?.sources[1]}
          markers={markers}
          options={defaultVideoOptions}
          onTimeUpdate={handleTimeUpdate}

        />
        <DriftFieldWrapper>
          <DriftFieldWithWebSocket />
	  {/*<DriftFieldWithJson currentTime={currentTime} />*/}
        </DriftFieldWrapper>
      </MainContainer>
    </LivePageWrapper>
  );
};

export default Live;
