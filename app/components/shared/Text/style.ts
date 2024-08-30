import { Typography } from '@mui/material';
import styled from 'styled-components';

import { StyledTypographyProps } from '@/app/components/shared/Text/types';

export const StyledText = styled(Typography)<StyledTypographyProps>`
    margin: ${({ margin }) => margin || '0 0'};
    padding: ${({ padding }) => padding || '0'};
    color: ${({ color }) => color || 'inherit'};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    font-size: ${({ fontSize }) => fontSize || '14px'};
`;
