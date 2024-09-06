import React, { memo } from 'react';
import { Box } from '@mui/material';

import { VideoWrapper } from '@/app/components/Video/style';

const Video = () => (
  <>
    <VideoWrapper>
      <Box className="stream-root">
        <img
          alt="stream"
          className="stream-img"
          srcSet={`${process.env.NEXT_PUBLIC_VIDEO_URL}/drift/video_feed`}
          loading="lazy"
        />
      </Box>
    </VideoWrapper>
  </>

);

export default memo(Video);
