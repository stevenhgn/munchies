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

import {
  StyledBox,
  LinkWrapper,
  StyledButtonPrimary,
  StyledButtonDelete,
  ButtonWrapper,
  ButtonArea,
} from "../../shared/StyledSystemComponent";
import {
  CardActionsWrapper,
  CardWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
} from "../../shared/CardWrapper";
import { getFoodwithId, deleteFoodWithId } from "../../api/foods";

const FoodOverview = ({ match }) => {
  const foodId = match.params.foodId;
  const [food, setFood] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };
  const onAgreeDelete = async () => {
    setOpen(!open);
    await deleteFoodWithId(foodId);
    console.log("Deleted");
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
  return (
    <SecondContentWrapper>
      <CardWrapper bgcolor={"cardBackgroundColor"} m={4}>
        <ImgWrapper src={food.image}></ImgWrapper>

        <StyledBox color={"primary"} m={2}>
          {food.name}
        </StyledBox>
        <CardActionsWrapper bgcolor={"cardBackgroundColor"}>
          <Button size="small" p={1}>
            <StyledBox color={"secondary"}>Price</StyledBox>
          </Button>
          <Button size="small" p={1}>
            <StyledBox color={"secondary"}>+ Favourites</StyledBox>
          </Button>
        </CardActionsWrapper>
      </CardWrapper>
      <ButtonArea>
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

const SecondContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.img`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;
export default FoodOverview;
