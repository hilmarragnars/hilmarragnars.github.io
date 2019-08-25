import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import MainPage from './MainPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`

const theme = {
  mobile_size: "600px"
};

const AppWrapper = styled.div`
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper className="App">
          <GlobalStyle />
          <MainPage />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
