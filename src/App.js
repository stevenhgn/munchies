import React from "react";
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Home from './pages/home/Home';

class App extends React.Component {
  render() {
    const { name } = this.props;

    return <Wrapper color="blue">
          <Home/>
          <Button>Default</Button>
        </Wrapper>;
  }
}

const Wrapper = styled.div`
    color: ${props => props.color};
`


export default hot(App);