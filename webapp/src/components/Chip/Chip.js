import { spacing, palette, sizing } from '@material-ui/system';
import { Chip } from '@material-ui/core';
import styled from 'styled-components';
import themes from '../../shared/themes';

const StyledChip = styled(Chip)`
  ${spacing};
  ${palette};
  ${sizing};

  &.MuiChip-clickableColorPrimary:hover {
    background-color: ${themes.light.palette.money};
  }
  &.MuiChip-clickableColorPrimary:focus {
    background-color: ${themes.light.palette.money};
  }
  &.MuiChip-clickableColorPrimary {
    background-color: ${themes.light.palette.money};
  }
`;

export default StyledChip;
