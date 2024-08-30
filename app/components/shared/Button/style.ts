import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/app/shared/theme/colors';

import { CustomButtonProps } from './types';

export const StyledButton = styled(MuiButton)<CustomButtonProps>`
    &.MuiButton-root {
        min-width: ${({ $width }) => $width || '150px'};
        background-color: ${({ $bgColor = COLORS.mistyWhite, $isActive }) => ($isActive ? COLORS.snowyWhite : $bgColor)};
        transition: all 0.3s ease-in-out;
        color: ${({ textColor }) => textColor || COLORS.pureWhite};
        font-size: ${({ fontSize }) => fontSize || '16px'};
        padding: ${({ padding }) => padding || '4px 24px'};
        border-radius: ${({ $borderRadius }) => $borderRadius || '4px'};
        text-transform: ${({ textTransform }) => textTransform || 'none'};
        font-weight: ${({ fontWeight }) => fontWeight || '400'};
        gap: 4px;
        border: ${({ borderColor }) => `1px solid ${borderColor || COLORS.transparent}`};
        &:hover {
            background-color: ${({ hoverBgColor }) => hoverBgColor || COLORS.snowyWhite};
        }

        &:disabled {
            background-color: ${({ disabledBgColor }) => disabledBgColor || COLORS.fogGrey};
            color: ${({ disabledTextColor }) => disabledTextColor || COLORS.fogGrey};
        }

        & svg {
            width: 20px;
            height: 20px;
        }
    }
`;
