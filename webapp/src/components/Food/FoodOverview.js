import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  spacing,
  palette,
  typography,
  sizing,
  flexbox,
} from "@material-ui/system";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import {
  StyledBox,
  LinkWrapper,
  StyledButtonPrimary,
  StyledButtonDelete,
  ButtonWrapper,
  ButtonArea,
  StyledH3,
  StyledH1,
} from "../../shared/StyledSystemComponent";
import {
  CardActionsWrapper,
  CardWrapper,
  CardWrapperFlexColumn,
  CardWrapperFlex,
} from "../../shared/CardWrapper";
import { getFoodwithId, deleteFoodWithId } from "../../api/foods";

const FoodOverview = ({ match }) => {
  let history = useHistory();
  const foodId = match.params.foodId;
  const [food, setFood] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };
  const onAgreeDelete = async () => {
    setOpen(!open);
    const msg = await deleteFoodWithId(foodId);
    if (msg === "Food deleted") history.push("/");
  };

  useEffect(() => {
    async function fetchFoodwithId() {
      const food = await getFoodwithId(foodId);
      setFood(food);
    }
    fetchFoodwithId();
  }, []);

  const editFood = () => {};
  if (food === null) {
    return <h1>Fetching food with id: {foodId}...</h1>; // Displaying loading process as long as there are no food available.
  }
  let priceRange = "";
  for (let i = 0; i < food.price_range; i++) {
    priceRange += "$";
  }
  return (
    <SecondContentWrapper>
      <ButtonWrapper>
        <LinkWrapper to={"/"}>
          <StyledH3 color={"interaction"}>{"< All Munchies"}</StyledH3>
        </LinkWrapper>
      </ButtonWrapper>
      <CardWrapperFlex bgcolor={"cardBackgroundColor"} m={4}>
        <ImgWrapper src={food.image}></ImgWrapper>
        <CardContentWrapper bgcolor={"cardBackgroundColor"}>
          <CardDescription ml={4}>
            <StyledBox color={"primary"}>
              <StyledH1>{food.name}</StyledH1>
              <StyledH3 color={"money"}>{priceRange}</StyledH3>
              <StyledH4 color={"primary"}>{food.price} NOK</StyledH4>
              <StyledH4 color={"primary"}>{food.description}</StyledH4>
            </StyledBox>
          </CardDescription>
          <ButtonArea mb={5}>
            <LinkWrapper to={"/createFood/" + foodId} key={foodId}>
              <ButtonWrapper color="white" mr={5}>
                <StyledButtonPrimary
                  variant="contained"
                  color="inherit"
                  width={100}
                  onClick={editFood}
                >
                  Edit
                </StyledButtonPrimary>
              </ButtonWrapper>
            </LinkWrapper>

            <StyledButtonDelete
              variant="contained"
              color="secondary"
              width={100}
              onClick={toggleDialog}
            >
              Delete
            </StyledButtonDelete>
          </ButtonArea>
        </CardContentWrapper>
      </CardWrapperFlex>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this food?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={onAgreeDelete} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </SecondContentWrapper>
  );
};
const CardContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const CardDescription = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledH4 = styled.h4`
  ${spacing};
  ${palette};
  ${typography};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const SecondContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.img`
  max-height: 500px;
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
export default FoodOverview;
