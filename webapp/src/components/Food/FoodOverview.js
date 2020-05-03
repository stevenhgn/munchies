import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "../../shared/StyledSystemComponent";
import {
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
} from "../../shared/CardWrapper";
import { getFoodwithId } from "../../api/foods";

const FoodOverview = ({ match }) => {
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
  return (
    <SecondContentWrapper>
      <CardWrapperFullWidth bgcolor={"cardBackgroundColor"} m={4}>
        <ImgWrapper src={food.image}></ImgWrapper>

        <Box color={"primary"} m={4}>
          {food.name}
        </Box>
        {/* <CardActionAreaWrapper>
          <CardMediaWrapper
            image={food.image}
            title={food.name}
            component="div"
          />
          <CardContentWrapper bgcolor={"cardBackgroundColor"}>
            <Typography variant="body2" color={"primary"} component="div">
            </Typography>
          </CardContentWrapper>
        </CardActionAreaWrapper> */}
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
        {nutritionContent.map((
          content /* apply key attribute to each child */
        ) => (
          <CardActionsWrapper>
            <Typography variant="body2" color={"primary"} component="div">
              <Box p={2}>{content}</Box>
            </Typography>
          </CardActionsWrapper>
        ))}
      </CardWrapperFullWidth>
    </SecondContentWrapper>
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
const ImgWrapper = styled.img`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;
export default FoodOverview;
