import React from "react";
import CardElement from "../../components/Card/Card";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ThemeContext from "../../theme-context";
import Box from "../../components/Box";

var Home = () => {
  return (
    <Wrapper>
      <h1>Munchies</h1>
      <CardList>
        <CardElement Name={"Oreo is"} Color={"primary"} />
        <CardElement />
        <CardElement />
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
