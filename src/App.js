import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainPage from './MainPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`

const AppWrapper = styled.div`
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <GlobalStyle />
        <MainPage />
      </AppWrapper>
    );
  }
}

export default App;
