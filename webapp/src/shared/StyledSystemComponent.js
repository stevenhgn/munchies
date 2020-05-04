import styled from "styled-components";
import { spacing, palette, typography, sizing } from "@material-ui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import themes from "../shared/themes";

const StyledBox = styled(Box)`
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

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const StyledTypography = styled(Typography)`
  ${spacing}
  ${palette}
`;
const StyledButtonPrimary = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  &.MuiButton-containedSecondary {
    margin-left: 10px;
  }
  &.MuiButton-containedSizeLarge {
    margin-left: 10px;
  }
  &.MuiButton-contained {
    background-color: ${themes.light.palette.inputColor};
  }
`;
const StyledButtonSecondary = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  &.MuiButton-containedSecondary {
    margin-left: 10px;
  }
  &.MuiButton-containedSizeLarge {
    margin-left: 10px;
  }
`;
const StyledButtonDelete = styled(Button)`
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
  &.MuiButton-containedSecondary {
    margin-left: 10px;
  }
  &.MuiButton-containedSizeLarge {
    margin-left: 10px;
  }
  &.MuiButton-contained {
    background-color: ${themes.light.palette.secondary};
  }
`;
export {
  StyledBox,
  LinkWrapper,
  StyledTypography,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonDelete,
  ButtonWrapper,
};
