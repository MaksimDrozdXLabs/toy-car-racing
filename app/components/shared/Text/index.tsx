import React, { FC } from 'react';
import { TypographyProps as MuiTypographyProps } from '@mui/material';

import { StyledText } from './style';

interface StyledTypographyProps extends MuiTypographyProps {
  margin?: string;
  padding?: string;
  color?: string;
  fontWeight?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  fontSize?: string;
}

const BaseText: FC<StyledTypographyProps> = (props) => (
  <StyledText {...props} />
);

export default BaseText;
