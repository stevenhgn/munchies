import React from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import Card from "@material-ui/core/Card";

const FoodOverview = ({ match }) => {
  console.warn(match.params.foodId);
  // TODOS: Send a get request to the api to get the food with foodId
  return (
    <Wrapper>
      <h1>Food Name</h1>
      <Card>{/* <CardMedia image={props.image}></CardMedia> */}</Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ${spacing};
  ${palette}; */
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`;
export default FoodOverview;
