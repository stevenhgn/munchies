import React, { useEffect, useState } from "react";
import CardElement from "../../components/Card/Card";
import { spacing, palette, typography, display } from "@material-ui/system";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ThemeContext from "../../theme-context";
import getFoods from "../../api/foods";

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
  let test = "Dark mode";
  return (
    <Wrapper>
      <Header>
        <h1>Munchies</h1>

        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <Button
              style={{ position: "absolute", right: 0 }}
              onClick={toggleTheme}
            >
              {test}
            </Button>
          )}
        </ThemeContext.Consumer>
      </Header>
      <CardList>
        {foods.map((food) => (
          <CardElement
            key={food._id}
            name={food.name}
            image={food.image}
            price={food.price}
            price_range={food.price_range}
          />
        ))}
      </CardList>
    </Wrapper>
  );
};

// TODOS: Design dark/light mode button
const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 7px;
  display: "end";
  &:hover {
    background-color: #5469d4;
  }
`;

const Wrapper = styled.div`
  /* ${spacing};
  ${palette}; */
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;
`;

const CardList = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;

const Header = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;
export default Home;
