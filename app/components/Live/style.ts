import { Box } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/app/shared/theme/colors';

export const LivePageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 32px 20px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
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
