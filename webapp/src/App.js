import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import Box from "../src/components/Box";
import ThemeContext from "./theme-context";
import themes from "./shared/themes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      console.log("efef");
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    console.log("this.state.theme", this.state.theme);
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          <Box color="secondary" p={1}>
            Test1 primary
          </Box>
          <Home color="primary" />
          {/* Your component tree.
            Now, you can override Material-UI's styles. */}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

const Wrapper = styled.div`
  color: ${props => props.color};
`;

export default hot(App);
