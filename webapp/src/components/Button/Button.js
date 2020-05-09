import styled from 'styled-components';
import { spacing, palette, typography, sizing } from '@material-ui/system';
import { Button } from '@material-ui/core';
import themes from '../../shared/themes';

// TODO: Need refactor
const ButtonWrapper = styled.div`
	${spacing};
	${palette};
	${typography};
	display: flex;
	justify-content: center;
`;
const ButtonArea = styled.div`
	${spacing};
	${palette};
	${typography};
	display: flex;
	justify-content: center;
`;

const StyledButtonPrimary = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};

  &.MuiButton-contained {
    background-color: ${themes.light.palette.inputColor};
    &:hover {
      background-color: ${themes.light.palette.inputColor};
    }
  }
`;

const StyledButtonSecondary = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  background-color: transparent;
`;
const StyledButtonDelete = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  /* &.MuiButton-containedSecondary {
    margin-left: 10px;
  }
  &.MuiButton-containedSizeLarge {
    margin-left: 10px;
  } */
  &.MuiButton-contained {
    background-color: ${themes.light.palette.secondary};
    &:hover {
      background-color: ${themes.light.palette.secondary};
    }
  }
`;
const StyledButtonInteraction = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  &.MuiButton-contained {
    background-color: ${themes.light.palette.interaction};
    &:hover {
      background-color: ${themes.light.palette.interaction};
    }
  }
`;

export {
	StyledButtonPrimary,
	StyledButtonSecondary,
	StyledButtonDelete,
	ButtonWrapper,
	ButtonArea,
	StyledButtonInteraction
};
