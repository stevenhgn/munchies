import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography, sizing } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import {
  StyledBox,
  StyledTypography,
} from "../../shared/StyledSystemComponent";
import { useHistory } from "react-router-dom";
import themes from "../../shared/themes";
import { CardWrapperFullWidth } from "../../shared/CardWrapper";
import { createNewFood, getFoodwithId, updateFood } from "../../api/foods";
import { TextField, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
  LinkWrapper,
  ButtonWrapper,
  StyledButtonPrimary,
  StyledButtonSecondary,
  ButtonArea,
} from "../../shared/StyledSystemComponent";

const CreateFood = ({ match }) => {
  let history = useHistory();
  const [food, setFood] = useState("");
  const foodId = match.params ? match.params.foodId : null;
  const [priceRange, setPriceRange] = React.useState(1);
  const priceRanges = [
    {
      value: 1,
      label: "$ (0-75 NOK)",
    },
    {
      value: 2,
      label: "$$ (75-150 NOK)",
    },
    {
      value: 3,
      label: "$$$ (150-300 NOK)",
    },
  ];

  const { register, handleSubmit, setValue, setError } = useForm({
    defaultValues: {
      name: "",
      image: "",
      price: 0,
      price_range: priceRange,
    },
  });
  useEffect(() => {
    async function fetchFoodwithId() {
      const food = await getFoodwithId(foodId);
      setFood(food);
      setValue("name", food.name);
      setValue("image", food.image);
      setValue("price", food.price);
      setPriceRange(food.price_range); // set the selection of price_range if food is found
    }
    if (match.params.foodId != null || match.params.foodId != undefined) {
      fetchFoodwithId();
    }
  }, []);

  const onSubmit = async (data) => {
    const reqBody = {
      name: data.name,
      price: data.price,
      price_range: priceRange,
      image: data.image,
    };
    const food = await createNewFood(reqBody); // call axios api call to create new food with reqBody as data
    if (food != null) history.push("/food/" + food._id);
  };

  const handleChange = (event) => {
    // handle pricerange select change
    setPriceRange(event.target.value);
  };
  const editMode = !!foodId;
  return (
    <SecondContentWrapper>
      <CardWrapperFullWidth m={16}>
        <StyledTypography variant="h5" p={5}>
          {editMode ? "Edit food" : "Create your own food"}
        </StyledTypography>
        <FormWrapper onSubmit={handleSubmit(onSubmit)} pl={5} pr={5} pb={5}>
          <TextFieldWrapper
            name="name"
            inputRef={register}
            id="filled-name-primary"
            fullWidth={true}
            title="Insert the food name"
            variant="filled"
            required
            placeholder={"Food name"}
            label="Food name"
            type="input"
            margin="normal"
            focused={true}
          ></TextFieldWrapper>
          {/* <TextFieldWrapper
            inputRef={register}
            name="FoodDescription"
            fullWidth={true}
            id="outlined-descrip-secondary"
            title="Insert the food description"
            variant="outlined"
            required
            placeholder={"Food description"}
            label="Food description"
            multiline={true}
            type="text"
            margin="normal"
          ></TextFieldWrapper> */}
          <TextFieldWrapper
            name="image"
            inputRef={register}
            focused={true}
            fullWidth
            id="filled-image-secondary"
            rows="2"
            title="Insert the food image"
            variant="filled"
            required
            placeholder={"Food image (url)"}
            label="Food image"
            multiline={true}
            type="text"
            margin="normal"
          ></TextFieldWrapper>
          <TextFieldWrapper
            name="price"
            type="number"
            inputRef={register}
            fullWidth={true}
            id="filled-image-secondary"
            title="Insert the food image"
            variant="filled"
            required
            placeholder={"Food price (NOK)"}
            label="Food price"
            margin="normal"
            focused={true}
            step={0.5}
          ></TextFieldWrapper>
          <TextFieldWrapper
            name="price_range"
            inputRef={register}
            id="standard-select-price-range"
            select
            variant="filled"
            label="Price range ($ - $$$)"
            value={priceRange}
            onChange={handleChange}
            helperText="Select food price range"
            margin="normal"
            width={"300px"}
            focused={true}
          >
            {priceRanges.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldWrapper>
          {editMode ? (
            <ButtonArea color="white">
              <ButtonWrapper mr={5}>
                <StyledButtonPrimary
                  type="submit"
                  variant="contained"
                  size="large"
                  color="inherit"
                  p={1}
                  title="Edit food"
                >
                  UPDATE
                </StyledButtonPrimary>
              </ButtonWrapper>
              <LinkWrapper to={"/food/" + food._id} key={food._id}>
                <StyledButtonSecondary
                  type="submit"
                  variant="contained"
                  size="large"
                  p={1}
                  title="Cancel edit"
                >
                  <StyledBox color={"primary"}>CANCEL</StyledBox>
                </StyledButtonSecondary>
              </LinkWrapper>
            </ButtonArea>
          ) : (
            <ButtonArea color="white">
              <ButtonWrapper mr={5}>
                <StyledButtonPrimary
                  type="submit"
                  variant="contained"
                  size="large"
                  color="inherit"
                  p={1}
                  title="Send in form and create food"
                >
                  CREATE
                </StyledButtonPrimary>
              </ButtonWrapper>
              <LinkWrapper to={"/"}>
                <StyledButtonSecondary
                  type="submit"
                  variant="contained"
                  size="large"
                  p={1}
                  title="Send in form and create food"
                >
                  <StyledBox color={"primary"}>CANCEL</StyledBox>
                </StyledButtonSecondary>
              </LinkWrapper>
            </ButtonArea>
          )}
        </FormWrapper>
      </CardWrapperFullWidth>
    </SecondContentWrapper>
  );
};

const SecondContentWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
`;
const TextFieldWrapper = styled(TextField)`
  color: primary;
  .MuiFormLabel-root.Mui-focused {
    color: ${themes.light.palette.inputColor};
  }
  .MuiFilledInput-underline:after {
    border-color: ${themes.light.palette.inputColor};
  }
  fieldset {
    border-color: white;
    /* background-color: lightgray; */
  }
  ${spacing};
  ${palette};
  ${typography};
  ${sizing};
`;

const FormWrapper = styled.form`
  ${spacing};
  ${palette};
  ${typography};
`;
export default CreateFood;
