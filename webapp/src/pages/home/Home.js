import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import StyledChip from '../../components/Chip/Chip';
import { spacing, palette, typography, sizing } from '@material-ui/system';
import styled from 'styled-components';
import { getFoods } from '../../api/foods';
import { StyledButtonInteraction, ButtonWrapper, ButtonArea, LinkWrapper, StyledTooltip, StyledBox } from '../../components';
import { PlusCircle } from '@styled-icons/boxicons-solid/';

import Grid from '@material-ui/core/Grid';
var Home = (props) => {
  const [foods, setFoods] = useState([]);
  const [chipData, setChipData] = useState([
    { key: 1, label: '$', tooltip: '0-75 NOK', clicked: false },
    { key: 2, label: '$$ ', tooltip: ' 75-150 NOK', clicked: false },
    { key: 3, label: '$$$', tooltip: '150-300 NOK', clicked: false },
  ]);
  useEffect(() => {
    async function fetchFood() {
      const foods = await getFoods();
      setFoods(foods);
    }
    fetchFood();
  }, []);

  const handleClick = (chipClicked) => async () => {
    chipClicked.clicked = !chipClicked.clicked;
    setChipData((chips) => chips.filter((chip) => chip.key != null)); // TODOS: Is this the best solution?
    var filteredParameter = '';
    chipData.forEach((chip) => {
      if (chip.clicked) {
        filteredParameter = filteredParameter + chip.key + ',';
      }
    });
    const foods = await getFoods(filteredParameter.slice(0, filteredParameter.length - 1));
    setFoods(foods);

    if (foods.length === 0) {
      setFoods(foods);
    }
  };

  return (
    <Wrapper>
      <StyledBox mt={5}>
        {chipData.map((chip) => (
          <AWrapper key={chip.key * -2} mr={3}>
            <StyledTooltip title={<h3>{chip.tooltip}</h3>} arrow fontSize={'3em'}>
              <StyledChip
                width={'100px'}
                size="medium"
                label={chip.label}
                key={chip.key}
                color={chip.clicked ? 'primary' : 'default'}
                onClick={handleClick(chip)}
              />
            </StyledTooltip>
          </AWrapper>
        ))}
      </StyledBox>
      <StyledBox mb={4} mt={4}>
        <LinkWrapper to="/createFood">
          <StyledButtonInteraction variant="text">
            <StyledAddCircle mr={1} size={25} color={'interaction'} />
            <StyledBox color={'interaction'} fontSize={18}>
              Create Food
            </StyledBox>
          </StyledButtonInteraction>
        </LinkWrapper>
      </StyledBox>
      <Grid container spacing={3}>
        {foods.length === 0
          ? 'Fetching foods...'
          : foods.map((food) => (
              <Grid item key={food._id}>
                <LinkWrapper to={'/food/' + food._id} key={food._id}>
                  <Card key={food._id} name={food.name} image={food.image} price={food.price} price_range={food.price_range} />
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

const StyledAddCircle = styled(PlusCircle)`
  ${spacing};
  ${palette};
  ${sizing};
`;

export default Home;
