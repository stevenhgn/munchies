import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "../../shared/Box";
import {
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
} from "../../shared/CardWrapper";
import { getFoodwithId } from "../../api/foods";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 500,
  },
  media: {
    height: 150,
    maxWidth: 500,
  },
});
const FoodOverview = ({ match }) => {
  const classes = useStyles();
  const foodId = match.params.foodId;
  const [food, setFood] = useState("");
  useEffect(() => {
    async function fetchFoodwithId() {
      const food = await getFoodwithId(foodId);
      setFood(food);
    }
    fetchFoodwithId();
  }, []);

  if (food === null) {
    return <h1>Fetching food with id: {foodId}...</h1>; // Displaying loading process as long as there are no food available.
  }
  // TODOS: Send a get request to the api to get the food with foodId
  return (
    <CardWrapperFullWidth>
      <CardActionAreaWrapper>
        <CardMediaWrapper
          className={classes.media}
          image={food.image}
          title={food.name}
          component="div"
        />
        <CardContentWrapper bgcolor={"backgroundColor"}>
          <Typography variant="body2" color={"primary"} component="div">
            <Box color={"primary"}>{food.name}</Box>
          </Typography>
        </CardContentWrapper>
      </CardActionAreaWrapper>
      <CardActionsWrapper bgcolor={"backgroundColor"}>
        {/* <Button size="small">
          <Box color={"secondary"}>Share</Box>
        </Button> */}
        <Button size="small" p={1}>
          <Box color={"secondary"}>Price</Box>
        </Button>
        <Button size="small" p={1}>
          <Box color={"secondary"}>+ Favourites</Box>
        </Button>
      </CardActionsWrapper>
    </CardWrapperFullWidth>
  );
};

export default FoodOverview;
