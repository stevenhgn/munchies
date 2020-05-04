import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const StyledBox = styled(Box)`
  ${spacing}
  ${palette}
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const StyledTypography = styled(Typography)`
  ${spacing}
  ${palette}
`;
export { StyledBox, LinkWrapper, StyledTypography };
