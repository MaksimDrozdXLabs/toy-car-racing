import { Link as MuiLink } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/app/shared/theme/colors';

export const StyledLink = styled(MuiLink)`
    && {
        text-decoration: none;
        color: ${COLORS.silverGrey};
        transition: color 0.3s ease-in-out;

        &:hover {
            color: ${COLORS.pureWhite};
        }
    }
`;
