import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <AppHeader className="App-header">
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro className="App-intro">
          Hilmar Ragnarsson
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
