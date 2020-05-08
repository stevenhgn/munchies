import React, { useEffect, useState } from "react";
import CardElement from "../../components/Card/Card";
import { spacing, palette, typography, display } from "@material-ui/system";
import styled from "styled-components";
import ThemeContext from "../../theme-context";
import { getFoods } from "../../api/foods";
import {
  LinkWrapper,
  StyledButtonInteraction,
  ButtonWrapper,
  StyledButtonPrimary,
  StyledBox,
  StyledAddCircle,
} from "../../shared/StyledSystemComponent";
import Grid from "@material-ui/core/Grid";
import themes from "../../shared/themes";
var Home = (props) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function fetchFood() {
      const foods = await getFoods();
      setFoods(foods);
    }
    fetchFood();
  }, []);
  if (foods.length === 0) {
    return <h1>Fetching foods...</h1>; // Displaying loading process as long as there are no food available.
  }

  return (
    <Wrapper>
      <StyledBox mb={4}>
        <LinkWrapper to="/createFood">
          <StyledButtonInteraction variant="text">
            <StyledAddCircle mr={1} size={25} color={"interaction"} />
            <StyledBox color={"interaction"} fontSize={18}>
              Create Food
            </StyledBox>
          </StyledButtonInteraction>
        </LinkWrapper>
      </StyledBox>
      <Grid container spacing={3}>
        {foods.map((food) => (
          <Grid item key={food._id}>
            <LinkWrapper to={"/food/" + food._id} key={food._id}>
              <CardElement
                key={food._id}
                name={food.name}
                image={food.image}
                price={food.price}
                price_range={food.price_range}
              />
            </LinkWrapper>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`;

export default Home;
