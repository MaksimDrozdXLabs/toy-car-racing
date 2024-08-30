import { Box } from '@mui/material';
import styled from 'styled-components';

export const VideoWrapper = styled(Box)<{ $isVideoLoading: boolean }>`
    display: ${({ $isVideoLoading }) => ($isVideoLoading ? 'none' : 'block')};
    width: 100%;
    border-radius: 12px;
    flex: 1 1 auto;

    & .video-js, video {
        border-radius: 12px;
    }
`;
