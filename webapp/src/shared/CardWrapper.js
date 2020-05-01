import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";

const IWrapper = styled.i`
  ${spacing};
  ${palette};
`;
const CardWrapper = styled(Card)`
  margin: 10px;
  max-width: 500px;
  ${spacing};
  ${palette};
`;
const CardWrapperFullWidth = styled(Card)`
  ${spacing};
  ${palette};
`;
const CardActionsWrapper = styled(CardActions)`
  ${spacing};
  ${palette};
  ${typography};
`;
const CardActionAreaWrapper = styled(CardActionArea)`
  ${spacing};
  ${palette};
  ${typography};
`;
const CardContentWrapper = styled(CardContent)`
  ${spacing};
  ${palette};
  ${typography};
  opacity: 95%;
`;
const CardMediaWrapper = styled(CardMedia)`
  align-content: center;
`;

export {
  IWrapper,
  CardWrapper,
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
};
