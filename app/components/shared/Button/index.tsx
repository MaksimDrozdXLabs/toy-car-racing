import React, { FC } from 'react';

import { StyledButton } from './style';
import { CustomButtonProps } from './types';

const CustomButton: FC<CustomButtonProps> = ({
  children,
  $bgColor,
  textColor,
  fontSize,
  borderColor,
  padding,
  $borderRadius,
  textTransform,
  hoverBgColor,
  disabledBgColor,
  disabledTextColor,
  fontWeight,
  ...props
}) => (
  <StyledButton
    {...props}
    $bgColor={$bgColor}
    borderColor={borderColor}
    textColor={textColor}
    fontSize={fontSize}
    padding={padding}
    $borderRadius={$borderRadius}
    textTransform={textTransform}
    hoverBgColor={hoverBgColor}
    disabledBgColor={disabledBgColor}
    disabledTextColor={disabledTextColor}
    fontWeight={fontWeight}
  >
    {children}
  </StyledButton>
);

export default CustomButton;
