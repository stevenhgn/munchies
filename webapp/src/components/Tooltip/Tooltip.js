import { spacing, palette, typography, sizing } from '@material-ui/system';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';

const StyledTooltip = styled(Tooltip)`
  ${spacing}
  ${palette}
  ${sizing};
  font-size:10em;
`;

export default StyledTooltip;
