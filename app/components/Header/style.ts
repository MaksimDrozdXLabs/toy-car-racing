import { Box, Toolbar } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/app/shared/theme/colors';

export const HeaderWrapper = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background-color: ${COLORS.fogGrey};
    border-radius: 16px;
    margin: 16px 20px;
`;

export const HeaderLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
    width: 45%;
`;

export const LogoContainer = styled(Box)`
    width: 20%;
    cursor: pointer;
`;
