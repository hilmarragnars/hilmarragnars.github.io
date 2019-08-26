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
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`
const IntroParagraph = styled.div`
  @media (max-width: ${props => props.theme.tablet_small}) {
    margin-bottom: 16px;
  }
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-top: ${props => props.first ? '32px' : 0};
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
          <IntroParagraph first>I am a Software Developer from Iceland, currently living in Barcelona. I moved to Madrid in the fall of 2015 where I finished my degree in Software Engineering and started my career. I lived in Madrid for 2 years before I moved to Barcelona.</IntroParagraph>
          <IntroParagraph>I have been working remotely for the past 2 years and it has been a very good and valuable experience. Now I am eager to return to an office, join a fun and hard working team and work on a product that I genuinely believe in.</IntroParagraph>
          <IntroParagraph>My hobbies are everything that involves spending time with good people. I feel like what ever I do for fun the most important part is the companionship. Weather it is playing volleyball ball on the beach or sitting on a terrace having a drink, as long as I am with nice and interesting people, I am happy.</IntroParagraph>
        </IntroText>
      </IntroTextWrapper>
    </IntroWrapper>
  );
};

export default Intro;
