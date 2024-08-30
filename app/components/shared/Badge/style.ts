import { Badge as MuiBadge } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/app/shared/theme/colors';

export const CustomBadge = styled(MuiBadge)<{ $variant?: 'outlined' | 'filled' }>`
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    height: auto;
    gap: 8px;
    ${({ $variant }) => ($variant === 'outlined'
    ? `
        border: 1px solid ${COLORS.stoneGrey};
        padding: 4px 8px;
        `
    : `
        background-color: currentColor;
        color: white;
        `)}
`;
