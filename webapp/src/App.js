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
import CreateFood from "./components/Food/CreateFood";
import { LinkWrapper } from "./shared/StyledSystemComponent";
import { spacing, palette, typography } from "@material-ui/system";
import css from "./App.css";
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
              <AppContent p={4}>
                <Header>
                  <LinkWrapper to="/">
                    <Logo color={"logo"}>MUNCHIES</Logo>
                  </LinkWrapper>
                  <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => (
                      <StyledButton
                        style={{ position: "absolute", right: 0 }}
                        onClick={toggleTheme}
                      >
                        {this.state.themeString}
                      </StyledButton>
                    )}
                  </ThemeContext.Consumer>
                </Header>
                <Switch>
                  <Route path="/food/:foodId" component={FoodOverview} />
                  <Route path="/createFood/:foodId?" component={CreateFood} />
                  <Route path="/">
                    <Home color={this.state.theme} />
                  </Route>
                </Switch>
              </AppContent>
            </Router>
          </ThemeProvider>
        </ThemeContext.Provider>
      </Wrapper>
    );
  }
}
const Logo = styled.h1`
  ${spacing};
  ${palette};
  font-family: "Sansita", sans-serif;
`;
const Header = styled.div`
  ${spacing};
  ${palette};
  columns: 2;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
`;
const Wrapper = styled.div`
  ${spacing};
  ${palette};
`;
const AppContent = styled.div`
  ${spacing};
  max-width: 1280px;
  margin: auto;
`;
// TODOS: Design dark/light mode button
const StyledButton = styled(Button)`
  ${spacing};
  ${palette};
  /* background-color: #6772e5; */
  /* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  /* padding: 4px 7px; */
  /* &:hover {
    background-color: #5469d4;
  } */
`;
export default hot(App);
