import { Box } from '@mui/material';
import styled from 'styled-components';

import { media } from '@/app/shared/media';
import { COLORS } from '@/app/shared/theme/colors';

export const LivePageWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 32px 20px;
    width: 100%;
    max-width: 1980px;
    margin: 0 auto;

    ${media.mobile`
         padding: 0 10px 10px;
        `}
`;

export const DriftFieldWrapper = styled(Box)`
  border-radius: 12px;
  background-color: ${COLORS.mistyWhite};
    flex: 1 1 auto;
    width: 100%;
`;

export const MainContainer = styled(Box)`
    display: flex;
    gap: 17px;
    margin-bottom: 16px;
`;
