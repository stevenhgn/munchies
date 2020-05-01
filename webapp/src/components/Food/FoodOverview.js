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
import { makeStyles, CardActions, Divider } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    // maxHeight: 2000,
    // minWidth: 1000,
    // minHeight: 1000,
  },
  media: {
    height: 150,
    maxWidth: 400,
    marginLeft: 200,
    marginRight: 200,
  },
});
const FoodOverview = ({ match }) => {
  const classes = useStyles();
  const foodId = match.params.foodId;
  const [food, setFood] = useState("");
  const nutritionContent = [
    "Does this consider as gainz",
    "Calories",
    "FDSFSF",
  ]; // TODOS: Create and get nutrtioncontent from api?
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
    <Wrapper // TODOS: This is just a test background color wrapper, remove later??
      bgcolor={"backgroundColor"}
      style={{
        position: "absolute",
        top: 90,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <SecondContentWrapper>
        <CardWrapperFullWidth
          bgcolor={"cardBackgroundColor"}
          style={{
            /*REMOVE */
            marginLeft: 100,
            marginRight: 50,
            marginTop: 100,
            width: "100%",
            height: "100%",
          }}
        >
          <CardActionAreaWrapper>
            <CardMediaWrapper
              className={classes.media}
              image={food.image}
              title={food.name}
              component="div"
            />
            <CardContentWrapper bgcolor={"cardBackgroundColor"}>
              <Typography variant="body2" color={"primary"} component="div">
                <Box color={"primary"}>{food.name}</Box>
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <CardActionsWrapper bgcolor={"cardBackgroundColor"}>
            <Button size="small" p={1}>
              <Box color={"secondary"}>Price</Box>
            </Button>
            <Button size="small" p={1}>
              <Box color={"secondary"}>+ Favourites</Box>
            </Button>
          </CardActionsWrapper>
        </CardWrapperFullWidth>

        <CardWrapperFullWidth
          style={{ marginTop: 40, marginRight: 40, width: "100%" }}
        >
          <CardActionAreaWrapper>
            <CardContentWrapper>
              <Typography variant="body2" component="div">
                <Box>
                  <h1>Nutrition content</h1>
                </Box>
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          {nutritionContent.map((content) => (
            <CardActionsWrapper>
              <Typography variant="body2" color={"primary"} component="div">
                <Box p={2}>{content}</Box>
              </Typography>
            </CardActionsWrapper>
          ))}
        </CardWrapperFullWidth>
      </SecondContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
`;
const SecondContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
`;
export default FoodOverview;
