import React, { Component } from 'react';
import styled from 'styled-components';
import profilePic from '../assets/hilmar-profile-pic.jpeg';
import pdf from '../assets/myCv.pdf';
import { Container, Row, Col } from 'styled-bootstrap-grid';

const PageWrapper = styled.div`
`
const HeaderWrapper = styled.div`
  text-align: center;
`

const HeaderTitle = styled.div`
  font-size: 45px;
  margin: 40px 0;
`
const IntroWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 8px 8px 8px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  @media (max-width: 414px) {
    flex-direction: column;
  }
`
const IntroPicWrapper = styled.div`
  height: 300px;
  @media (max-width: 414px) {
    margin-bottom: 16px;
    text-align: center;
  }
`
const IntroPic = styled.img`
  height: 100%;
`
const IntroTextWrapper = styled.div`
  padding-left: 8px;
`
const IntroText = styled.div`
`
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
const CvWrapper = styled.div`
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  padding: 8px;
  text-align: center;
`
const CvLink = styled.a`
  cursor: pointer;
  color: gray;
  font-size: 32px;
  text-decoration: none;
`


class MainPage extends Component {
  render() {
    return (
      <Container>
        <HeaderWrapper>
          <HeaderTitle>Hilmar Ragnarsson</HeaderTitle>
        </HeaderWrapper>
        <IntroWrapper>
          <IntroPicWrapper>
            <IntroPic src={profilePic} alt="me" />
          </IntroPicWrapper>
          <IntroTextWrapper>
            <IntroText>I am the best programmer in my moms world. And I am also the best programmer in my grandmothers world. I don't think my dog knows I am a programmer but if she knew I would also be the best programmer in her world.</IntroText>
          </IntroTextWrapper>
        </IntroWrapper>
        <ExperienceWrapper>
          <ExperienceTitle>Experience</ExperienceTitle>
          <ExperienceText>All kinds of experience!</ExperienceText>
        </ExperienceWrapper>
        <CvWrapper>
          <CvLink href={pdf} target="_blank">Curriculum Vitae</CvLink>
        </CvWrapper>
      </Container>
    );
  }
}


export default MainPage;
