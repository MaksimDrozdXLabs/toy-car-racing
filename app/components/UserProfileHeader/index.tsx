import React from 'react';

import Text from '@/app/components/shared/Text';
import { COLORS } from '@/app/shared/theme/colors';

import { UserProfileHeaderWrapper, UserProfileInitials } from './style';

export const UserProfileHeader = () => (
  <>
    <UserProfileHeaderWrapper padding="4px 8px" $bgColor={COLORS.transparent}>
      <UserProfileInitials>JD</UserProfileInitials>
      <Text fontSize="16px" textTransform="capitalize" color={COLORS.pureWhite}>John Doe</Text>
    </UserProfileHeaderWrapper>
  </>
);
