import React, { Redirect } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
  },
  media: {
    height: 150,
  },
});
const CardElement = (props) => {
  let priceRange = "";
  for (let i = 0; i < props.price_range; i++) {
    priceRange += "$";
  }
  const classes = useStyles();
  return (
    <CardWrapper color={"primary"} className={classes.root}>
      <CardActionsAreaWrapper>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContentWrapper bgcolor={"backgroundColor"}>
          <Typography variant="body2" color={"primary"} component="div">
            <Box color={"primary"}>{props.name}</Box>
            <Box color={"third"}>
              {props.price} kr
              <br />
              <IWrapper color={"priceRange"}>Price range:</IWrapper>
              <IWrapper p={2} color={"lightgreen"}>
                {priceRange}
              </IWrapper>
            </Box>
          </Typography>
        </CardContentWrapper>
      </CardActionsAreaWrapper>
      <CardActionsWrapper bgcolor={"backgroundColor"}>
        {/* <Button size="small">
          <Box color={"secondary"}>Share</Box>
        </Button> */}
        <Button size="small" p={1}>
          <Box color={"secondary"}>Details</Box>
        </Button>
        <Button size="small" p={1}>
          <Box color={"secondary"}>+ Favourites</Box>
        </Button>
      </CardActionsWrapper>
    </CardWrapper>
  );
};
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
const CardActionsWrapper = styled(CardActions)`
  ${spacing};
  ${palette};
  ${typography};
`;
const CardActionsAreaWrapper = styled(CardActionArea)`
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

export default CardElement;
