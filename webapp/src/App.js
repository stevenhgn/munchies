import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./theme-context";
import themes from "./shared/themes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FoodOverview from "./components/Food/FoodOverview";
import { LinkWrapper } from "./shared/Box";
import { spacing, palette, typography } from "@material-ui/system";
import { IWrapper } from "./shared/CardWrapper";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
        themeString: state.theme === themes.dark ? "Dark mode" : "Light mode",
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      themeString: "Dark mode",
    };
  }

  render() {
    return (
      <Wrapper>
        <ThemeContext.Provider value={this.state}>
          <ThemeProvider theme={this.state.theme}>
            <Router>
              <Header>
                <LinkWrapper to="/">
                  <HWrapper>Munchies</HWrapper>
                </LinkWrapper>
                <ThemeContext.Consumer>
                  {({ theme, toggleTheme }) => (
                    <Button
                      style={{ position: "absolute", right: 0 }}
                      onClick={toggleTheme}
                    >
                      {this.state.themeString}
                    </Button>
                  )}
                </ThemeContext.Consumer>
              </Header>
              <Switch>
                <Route path="/food/:foodId" component={FoodOverview} />
                <Route path="/">
                  <Home color={this.state.theme} />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </ThemeContext.Provider>
      </Wrapper>
    );
  }
}
const HWrapper = styled.h1`
  ${spacing};
  ${palette};
`;
const Header = styled.div`
  ${spacing};
  ${palette};
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;
const Wrapper = styled.div`
  /* color: ${(props) => props.color}; */
`;
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
export default hot(App);
