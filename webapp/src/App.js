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
import { LinkWrapper, StyledBox, Logo } from "./shared/StyledSystemComponent";
import { spacing, palette, typography, sizing } from "@material-ui/system";
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
                    <Logo color={"logo"} fontSize={60}>
                      MUNCHIES
                    </Logo>
                    <StyledBox color={"logo"} fontSize={30}>
                      ! hungry
                    </StyledBox>
                  </LinkWrapper>
                  <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => (
                      <StyledBox
                        mb={4}
                        mr={4}
                        onClick={toggleTheme}
                        style={{ position: "absolute", right: 0 }}
                      >
                        <StyledThemeModeButton variant="contained">
                          <StyledBox color={"white"}>
                            {this.state.themeString}
                          </StyledBox>
                        </StyledThemeModeButton>
                      </StyledBox>
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
// TODOS: Design dark/light mode button
const StyledThemeModeButton = styled(Button)`
  ${spacing};
  ${palette};
  display: flex;
  justify-content: flex-end;
  &.MuiButton-contained {
    background-color: ${themes.light.palette.primary};
    &:hover {
      background-color: ${themes.light.palette.primary};
    }
  }
`;
const Header = styled.div`
  ${spacing};
  ${palette};
  columns: 2;
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
export default hot(App);
