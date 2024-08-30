import React, { FC } from 'react';
import { BadgeProps as MuiBadgeProps } from '@mui/material';

import { CustomBadge } from './style';

interface BadgeProps extends MuiBadgeProps {
  $variant?: 'outlined' | 'filled';
}

const StyledBadge: FC<BadgeProps> = ({ children, $variant, ...props }) => (
  <CustomBadge {...props} $variant={$variant}>
    {children}
  </CustomBadge>
);

export default StyledBadge;
