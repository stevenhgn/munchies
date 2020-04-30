import React, { useEffect, useState } from "react";
import CardElement from "../../components/Card/Card";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ThemeContext from "../../theme-context";
import Box from "../../components/Box";
import getFoods from "../../api/foods";

var Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    async function fetchFood() {
      const foods = await getFoods();
      setFoods(foods);
    }
    fetchFood();
  }, []);

  console.log("food", foods);
  if (foods.length === 0) {
    return <h1>Fetching foods...</h1>;
  }
  return (
    <Wrapper>
      <h1>Munchies</h1>
      <CardList>
        {foods.map((food) => (
          <CardElement key={food._id} name={food.name} color={"primary"} />
        ))}
      </CardList>
      <Box color={"primary"} p={1}>
        Test primary
      </Box>
      <Box color={"primary"} p={5}>
        Test secondary
      </Box>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Button onClick={toggleTheme}>Dark Mode</Button>
        )}
      </ThemeContext.Consumer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CardList = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;
export default Home;
