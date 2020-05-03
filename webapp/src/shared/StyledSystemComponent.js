import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Box = styled.div`
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
export { Box, LinkWrapper, StyledTypography };
