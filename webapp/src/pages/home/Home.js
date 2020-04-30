import React, { useEffect, useState } from "react";
import CardElement from "../../components/Card/Card";
import { spacing, palette, typography, display } from "@material-ui/system";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ThemeContext from "../../theme-context";
import getFoods from "../../api/foods";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkWrapper } from "../../components/Box";

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
      <CardList>
        {foods.map((food) => (
          <LinkWrapper to={"/food/" + food._id} key={food._id}>
            <CardElement
              key={food._id}
              name={food.name}
              image={food.image}
              price={food.price}
              price_range={food.price_range}
            />
          </LinkWrapper>
        ))}
      </CardList>
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
