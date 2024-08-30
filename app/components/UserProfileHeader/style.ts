import { Box } from '@mui/material';
import styled from 'styled-components';

import Button from '@/app/components/shared/Button';
import { COLORS } from '@/app/shared/theme/colors';

export const UserProfileHeaderWrapper = styled(Button)`
    display: flex;
    font-size: 16px;
`;

export const UserProfileInitials = styled(Box)`
    margin-right: 8px;
    color: ${COLORS.obsidianBlack};
    font-size: 12px;
    padding: 2px 4px;
    background-color: ${COLORS.freshGreen};
    border-radius: 4px;
    font-weight: 900;
`;
