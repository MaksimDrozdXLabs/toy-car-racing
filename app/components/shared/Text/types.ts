import { TypographyProps as MuiTypographyProps } from '@mui/material';

export interface StyledTypographyProps extends MuiTypographyProps {
    margin?: string;
    padding?: string;
    color?: string;
    fontWeight?: string | number;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    fontSize?: string;
}
