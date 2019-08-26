import React from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/hilmar-profile-pic.jpeg';

const IntroWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 32px 32px 32px;
  border-left: 1px solid ${props => props.theme.gray_light};
  border-bottom: 1px solid ${props => props.theme.gray_light};
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
  }
`
const IntroPicWrapper = styled.div`
  height: 300px;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-bottom: 16px;
    text-align: center;
    background-color: #F5E1C8;
  }
`
const IntroPic = styled.img`
  height: 100%;
`
const IntroTextWrapper = styled.div`
  padding-left: 32px;
`
const IntroText = styled.div`
  p:first-child {
    margin-top: 0;
  }
`

const Intro = function(props) {
  return (
    <IntroWrapper>
      <IntroPicWrapper>
        <IntroPic src={profilePic} alt="me" />
      </IntroPicWrapper>
      <IntroTextWrapper>
        <IntroText>
          <p>I am a Software Developer from Iceland, currently living in sunny Barcelona. I moved to Madrid in the fall of 2015 where I finished my degree in Software Engineering and started my career. I lived in Madrid for little more than 2 years before I moved to Barcelona.</p>
          <p>I have been working remotely for the last 2 years and it has been a very good and valuable experience. Now I am eager to return to the office and join a fun and hard working team and work on a product that I genuinely believe in.</p>
          <p>"I am the best programmer in my moms world. And I am also the best programmer in my grandmothers world. I don't think my dog knows I am a programmer but if she knew I would also be the best programmer in her world." - me</p>
        </IntroText>
      </IntroTextWrapper>
    </IntroWrapper>
  );
};

export default Intro;
