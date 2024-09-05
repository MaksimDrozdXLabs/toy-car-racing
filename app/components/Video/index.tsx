import 'videojs-youtube';
import 'videojs-markers';
import 'videojs-hls-quality-selector';

import React, {
  FC, memo, useEffect, useRef, useState,
} from 'react';
import { Box, Skeleton } from '@mui/material';
import videojs from 'video.js';
import offset from 'videojs-offset';

import { defaultVideoOptions } from '@/app/shared/data/videoData';
import { IVideo } from '@/app/shared/types/video';

import { VideoWrapper } from './style';

import 'video.js/dist/video-js.css';
import 'videojs-markers/dist/videojs.markers.css';

interface VideoProps {
  onReady?: (player: IVideo) => void;
  onEnded?: () => void;
  sources: { src: string; type: string };
  markers?: { time: number; text: string }[];
  options?: typeof videojs.options;
    onTimeUpdate?: (currentTime: number) => void;
}

if (!videojs.getPlugin('offset')) {
  videojs.registerPlugin('offset', offset);
}

const Video: FC<VideoProps> = ({
  options = defaultVideoOptions,
  sources,
  onReady,
  onEnded,
  markers,
  onTimeUpdate,
}) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<IVideo | null>(null);
  if (sources) {
    options.sources = sources;
  }
  if (options?.sources?.type === 'video/youtube') {
    options.techOrder = ['youtube'];
    options.controls = false;
    options.youtube = { ytControls: 1 };
  }
  useEffect(() => {
    const initializePlayer = () => {
      if (!playerRef.current) {
        const videoElement = document.createElement('video-js');
        videoElement.setAttribute('controlsList', 'nodownload');
        videoRef.current?.appendChild(videoElement);
        const newPlayer = videojs(videoElement, options, () => {
          videojs.log('player is ready');

          if (onReady) {
            onReady(newPlayer);
          }
          newPlayer.on('ended', () => {
            if (onEnded) {
              onEnded();
            }
          });

          newPlayer.on('timeupdate', () => {
            const second = Math.floor(newPlayer.currentTime());
            if (onTimeUpdate) {
              if (second) {
                onTimeUpdate(second);
              }
            }
          });
        }) as IVideo;

        setIsVideoLoading(false);

        newPlayer.hlsQualitySelector({
          displayCurrentQuality: true,
        });
        newPlayer?.markers({
          markerStyle: {
            width: '8px',
            height: '10px',
            'background-color': 'yellow',
            margin: '10px',
          },
          markers,
        });
        playerRef.current = newPlayer;
      } else {
        const player = playerRef.current;

        player.autoplay(options.autoplay ?? false);
        player.src(sources);
      }
    };

    initializePlayer();

    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [markers, options, onReady, onEnded, sources]);

  return (
    <>
      {isVideoLoading && (
        <Skeleton variant="rounded" width="100%" height="510px" />
      )}
      <Box style={{width: '50%'}}>
        <VideoWrapper $isVideoLoading={isVideoLoading}>
          <Box className={"stream-root"}>
            {/*<div ref={videoRef} /> */}
            <img className={"stream-img"} src="http://127.0.0.1:8081/drift/video_feed"/>
          </Box>
        </VideoWrapper>
      </Box>
    </>
  );
};

export default memo(Video);
