import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "../../shared/Box";
import PropTypes from "prop-types";

import {
  CardActionsWrapper,
  CardActionAreaWrapper,
  CardContentWrapper,
  IWrapper,
  CardMediaWrapper,
  CardWrapperFullWidth,
  useStyles,
} from "../../shared/CardWrapper";
import { createNewFood } from "../../api/foods";
import { TextField, MenuItem } from "@material-ui/core";
const CreateFood = () => {
  const classes = useStyles();

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

  const handleChange = (event) => {
    // handle pricerange select change
    setPriceRange(event.target.value);
  };
  return (
    <Wrapper
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
          style={{
            /*REMOVE */
            marginLeft: 160,
            marginRight: 160,
            marginTop: 100,
            width: "100%",
            height: "100%",
          }}
        >
          <CardActionAreaWrapper>
            <CardContentWrapper bgcolor={"cardBackgroundColor"}>
              <Typography variant="body2" component="div">
                <Box color={"primary"}>Create your own food</Box>
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <CardActionsWrapper
            bgcolor={"cardBackgroundColor"}
            style={{
              flexDirection: "column",
            }}
          >
            {/* <Box style={{ marginLeft: "120px", marginRight: "120px" }}> */}
            <TextFieldWrapper
              className={classes.root}
              InputProps={{ className: classes.input }}
              id="outlined-name-primary"
              fullWidth={true}
              title="Insert the food name"
              variant="outlined"
              required
              color="primary"
              placeholder={"Food name"}
              label="Food name"
              type="text"
              margin="normal"
            ></TextFieldWrapper>
            <TextFieldWrapper
              className={classes.root}
              InputProps={{ className: classes.input }}
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
            {/* </Box> */}
          </CardActionsWrapper>
          <CardActionsWrapper
            bgcolor={"cardBackgroundColor"}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              size="large"
              p={1}
              title="Send in form and create food"
              onClick={createNewFood}
            >
              <Box color={"lightgreen"}>Send</Box>
            </Button>
          </CardActionsWrapper>
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
const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-color: white;
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
export default CreateFood;
