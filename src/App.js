import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import MainPage from './MainPage';
import Footer from './components/Footer.js'
import Header from './components/Header.js'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`

const theme = {
  mobile_size: "600px",
  gray_light: "#DCDCDC"
};

const AppWrapper = styled.div`
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper className="App">
          <GlobalStyle />
          <Header />
          <MainPage />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
