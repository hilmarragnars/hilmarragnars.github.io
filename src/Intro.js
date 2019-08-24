import React, { Component } from 'react';
import styled from 'styled-components';
import profilePic from '../assets/hilmar-profile-pic.jpeg'


const IntroWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 8px 8px 8px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
`
const IntroPicWrapper = styled.div`
  height: 300px;
`
const IntroPic = styled.img`
  height: 100%;
`
const IntroTextWrapper = styled.div`
  padding-left: 8px;
`
const IntroText = styled.div`
`


class Intro extends Component {
  render() {
    return (
      <IntroWrapper>
        <IntroPicWrapper>
          <IntroPic src={profilePic} alt="me" />
        </IntroPicWrapper>
        <IntroTextWrapper>
          <IntroText>I am the best programmer my moms world. And I am also the best programmer in my grandmothers world. I don't think my dog knows I am a programmer but if she knew I would also be the best programmer in her world.</IntroText>
        </IntroTextWrapper>
      </IntroWrapper>
    );
  }
}

export default Intro;
