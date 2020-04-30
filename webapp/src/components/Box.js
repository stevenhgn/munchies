import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Box = styled.div`
  ${spacing}
  ${palette}
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #000;
`;
export { Box, LinkWrapper };

