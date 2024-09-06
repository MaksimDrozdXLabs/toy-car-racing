import { Box } from '@mui/material';
import styled from 'styled-components';

export const VideoWrapper = styled(Box)`
    width: 100%;
    border-radius: 12px;

    & .video-js, video {
        border-radius: 12px;
    }

    .stream-root {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .stream-img {
        width: 100%;
        height: 100%;
    }
`;
