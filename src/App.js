import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import Experience from './Experience';
import Cv from './Cv';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`

const AppWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <GlobalStyle />
        <Header />
        <Intro />
        <Experience />
        <Cv />
      </AppWrapper>
    );
  }
}

export default App;
