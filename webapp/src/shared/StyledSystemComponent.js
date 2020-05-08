import styled from "styled-components";
import { spacing, palette, typography, sizing } from "@material-ui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import themes from "../shared/themes";
import { PlusCircle } from "@styled-icons/boxicons-solid/";
import { Chip, Tooltip } from "@material-ui/core";

const StyledBox = styled(Box)`
  ${spacing}
  ${palette}
`;
const Logo = styled(Box)`
  ${spacing}
  ${palette}
  ${sizing};
  font-family: "Sansita", sans-serif;
`;
const StyledTooltip = styled(Tooltip)`
  ${spacing}
  ${palette}
  ${sizing};
  font-size:10em;
`;
const StyledBoxRowFlex = styled(Box)`
  ${spacing}
  ${palette}
`;
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
const StyledH3 = styled.h3`
  ${spacing};
  ${palette};
  ${typography};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const StyledAddCircle = styled(PlusCircle)`
  ${spacing};
  ${palette};
  ${sizing};
`;
const StyledTypography = styled(Typography)`
  ${spacing}
  ${palette}
  color: ${themes.light.palette.h3};
  display:flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
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
const StyledH1 = styled.h1`
  ${spacing};
  ${palette};
  ${typography};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;
export {
  StyledBox,
  StyledBoxRowFlex,
  LinkWrapper,
  StyledTypography,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonDelete,
  ButtonWrapper,
  ButtonArea,
  StyledButtonInteraction,
  StyledAddCircle,
  StyledChip,
  Logo,
  StyledH3,
  StyledH1,
  StyledTooltip,
};
