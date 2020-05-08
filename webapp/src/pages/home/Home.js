import React, { useEffect, useState } from "react";
import CardElement from "../../components/Card/Card";
import { spacing, palette, typography, sizing } from "@material-ui/system";
import styled from "styled-components";
import ThemeContext from "../../theme-context";
import { getFoods } from "../../api/foods";
import {
  LinkWrapper,
  StyledButtonInteraction,
  ButtonWrapper,
  StyledBoxRowFlex,
  StyledBox,
  StyledAddCircle,
  StyledChip,
} from "../../shared/StyledSystemComponent";
import Grid from "@material-ui/core/Grid";
import themes from "../../shared/themes";
var Home = (props) => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [chipData, setChipData] = useState([
    { key: 1, label: "$ (0-75 NOK)", clicked: false },
    { key: 2, label: "$$ (75-150 NOK)", clicked: false },
    { key: 3, label: "$$$ (150-300 NOK)", clicked: false },
  ]);
  useEffect(() => {
    async function fetchFood() {
      const foods = await getFoods(null);
      setFoods(foods);
      setFilteredFoods(foods);
    }
    fetchFood();
  }, []);

  // if (foods.length === 0) {
  //   return <h1>Fetching foods...</h1>; // Displaying loading process as long as there are no food available.
  // }

  const handleClick = (chipClicked) => async () => {
    chipClicked.clicked = !chipClicked.clicked;
    setChipData((chips) => chips.filter((chip) => chip.key != null)); // TODOS: Is this the best solution?
    let filteredFoods = [];
    chipData.forEach((chip) => {
      if (chip.clicked) {
        filteredFoods.push(
          ...foods.filter((food) => food.price_range == chip.key) // ... flatten list
        );
      }
      setFilteredFoods(filteredFoods);
    });

    if (filteredFoods.length === 0) {
      setFilteredFoods(foods);
    }
  };
  return (
    <Wrapper>
      <StyledBoxRowFlex mt={5}>
        {chipData.map((chip) => (
          <AWrapper key={chip.key * -2} mr={3}>
            <StyledChip
              variant="default"
              size="medium"
              label={chip.label}
              key={chip.key}
              color={chip.clicked ? "primary" : "default"}
              onClick={handleClick(chip)}
            />
          </AWrapper>
        ))}
      </StyledBoxRowFlex>
      <StyledBox mb={4} mt={4}>
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
        {foods.length === 0
          ? "Theres no food"
          : filteredFoods.map((food) => (
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
const AWrapper = styled.a`
  ${spacing};
  ${palette};
  ${sizing};
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`;

export default Home;
