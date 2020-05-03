import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { makeStyles } from "@material-ui/core";

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
const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    // maxHeight: 2000,
    // minWidth: 1000,
    // minHeight: 1000,
    // "& label.Mui-focused": {
    //   color: "white",
    // },
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "gray",
    //   },
    // },
    // // "&:hover fieldset": {
    // //   borderColor: "white",
    // // },
    // "&.Mui-focused fieldset": {
    //   borderColor: "yellow",
    // },
  },
  media: {
    height: 150,
    maxWidth: 400,
    marginLeft: "40%",
    marginRight: "30%",
  },
  input: {
    color: "white",
  },
});
export {
  IWrapper,
  CardWrapper,
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
  useStyles,
};
