import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import { Box, StyledTypography } from "../../shared/StyledSystemComponent";

import {
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
} from "../../shared/CardWrapper";
import { createNewFood } from "../../api/foods";
import { TextField, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

const CreateFood = () => {
  const [food, setFood] = useState("");
  const priceRanges = [
    {
      value: 1,
      label: "$",
    },
    {
      value: 2,
      label: "$$",
    },
    {
      value: 3,
      label: "$$$",
    },
  ];
  const [priceRange, setPriceRange] = React.useState(1);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(priceRange);
    // pricerange er i pricerannge
    // TODOS: Call post.
  };

  const handleChange = (event) => {
    // handle pricerange select change
    setPriceRange(event.target.value);
  };
  return (
    <SecondContentWrapper>
      <CardWrapperFullWidth m={16}>
        <StyledTypography variant="h5" p={5}>
          Create your own food
        </StyledTypography>
        <FormWrapper onSubmit={handleSubmit(onSubmit)} pl={5} pr={5}>
          <TextFieldWrapper
            name="Foodname"
            inputRef={register}
            id="outlined-name-primary"
            fullWidth={true}
            title="Insert the food name"
            variant="outlined"
            required
            color="primary"
            placeholder={"Food name"}
            label="Food name"
            type="input"
            margin="normal"
          ></TextFieldWrapper>
          <TextFieldWrapper
            inputRef={register}
            name="FoodDescription"
            fullWidth={true}
            id="outlined-descrip-secondary"
            title="Insert the food description"
            variant="outlined"
            required
            color="secondary"
            placeholder={"Food description"}
            label="Food description"
            multiline={true}
            type="text"
            margin="normal"
          ></TextFieldWrapper>
          <TextFieldWrapper
            name="FoodImage"
            inputRef={register}
            fullWidth={true}
            id="outlined-image-secondary"
            title="Insert the food image"
            variant="outlined"
            required
            color="secondary"
            placeholder={"Food image (url)"}
            label="Food image"
            multiline={true}
            type="text"
            margin="normal"
          ></TextFieldWrapper>
          <TextFieldWrapper
            name="PriceRange"
            inputRef={register}
            id="standard-select-price-range"
            select
            variant="outlined"
            label="Select"
            value={priceRange}
            onChange={handleChange}
            helperText="Select food price range"
          >
            {priceRanges.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button
              type="submit"
              size="large"
              p={1}
              title="Send in form and create food"
              onClick={createNewFood}
            >
              <Box color={"lightgreen"}>Send</Box>
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </CardWrapperFullWidth>
    </SecondContentWrapper>
  );
};

const ButtonWrapper = styled.div`
  ${spacing};
  ${palette};
  ${typography};
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.h1`
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
const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-color: white;
    /* background-color: lightgray; */
  }
  input {
    ::-webkit-input-placeholder {
      /* WebKit, Blink, Edge */
    }
  }
  ${spacing};
  ${palette};
  ${typography};
`;

const FormWrapper = styled.form`
  ${spacing};
  ${palette};
  ${typography};
`;
export default CreateFood;
