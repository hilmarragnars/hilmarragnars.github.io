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
`

const Intro = function(props) {
  return (
    <IntroWrapper>
      <IntroPicWrapper>
        <IntroPic src={profilePic} alt="me" />
      </IntroPicWrapper>
      <IntroTextWrapper>
        <IntroText>I am the best programmer in my moms world. And I am also the best programmer in my grandmothers world. I don't think my dog knows I am a programmer but if she knew I would also be the best programmer in her world.</IntroText>
      </IntroTextWrapper>
    </IntroWrapper>
  );
};

export default Intro;
