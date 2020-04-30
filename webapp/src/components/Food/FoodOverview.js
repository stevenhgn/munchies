import React from "react";
import styled from "styled-components";
import { spacing, palette, typography } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "../../components/Box";

const FoodOverview = (props) => {
  return (
    <Wrapper>
      <ContentMedia image={props.image}></ContentMedia>
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
