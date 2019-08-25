import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';
import CvFile from './components/CvFile.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Intro from './components/Intro.js';

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Intro />
        <Experience />
        <Education />
        <CvFile />
      </Container>
    );
  }
}

export default MainPage;
