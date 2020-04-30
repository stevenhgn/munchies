import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./theme-context";
import themes from "./shared/themes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          <Home color={this.state.theme} />
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

const Wrapper = styled.div`
  color: ${(props) => props.color};
`;

export default hot(App);
