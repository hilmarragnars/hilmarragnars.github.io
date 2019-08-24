import React, { Component } from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  padding: 8px;
  text-align: center;
`

const ExperienceTitle = styled.div`
  font-size: 32px;
  letter-spacing: 3px;
  /* writing-mode: vertical-rl; */
`
const ExperienceText = styled.p`
  /* writing-mode: vertical-rl; */
`

class Experience extends Component {
  render() {
    return (
      <ExperienceWrapper>
        <ExperienceTitle>Experience</ExperienceTitle>
        <ExperienceText>I have all the Experience</ExperienceText>
      </ExperienceWrapper>
    );
  }
}

export default Experience;
