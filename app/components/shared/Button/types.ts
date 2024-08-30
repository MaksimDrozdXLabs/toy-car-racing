import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

export interface CustomButtonProps extends MuiButtonProps {
    $bgColor?: string;
    textColor?: string;
    fontSize?: string;
    padding?: string;
    $borderRadius?: string;
    textTransform?: string;
    hoverBgColor?: string;
    disabledBgColor?: string;
    disabledTextColor?: string;
    $isActive?: boolean;
    fontWeight?: string;
    borderColor?: string;
    $width?: string;
}
