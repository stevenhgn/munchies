import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardWrapper,
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
} from "../../shared/CardWrapper";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "../../shared/Box";

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
      <CardActionAreaWrapper>
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
      </CardActionAreaWrapper>
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

export default CardElement;
