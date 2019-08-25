import React, { Component } from 'react';
import styled from 'styled-components';
import profilePic from '../assets/hilmar-profile-pic.jpeg';
import broadsheetLogo from '../assets/broadsheet-logo.svg';
import ruLogo from '../assets/ru-univercity.png';
import smartvelLogo from '../assets/smartvel-logo.jpg';
import pdf from '../assets/myCv.pdf';
import { Container } from 'styled-bootstrap-grid';


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
  padding-left: 8px;
`
const IntroText = styled.div`
`
const ExperienceWrapper = styled.div`
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  padding: 8px 8px 8px 0;
  display: flex;
`

const ExperienceTitle = styled.span`
  font-size: 32px;
  text-align: center;
  writing-mode: vertical-rl;
`
const ExperienceText = styled.div`
  margin: 16px 0 16px 32px;
`
const Company = styled.div`
`
const CompanyTitle = styled.h3`
  margin: 8px 0 32px 64px;
`
const CompanyImage = styled.img`
  height ${props => props.size};

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
          <ExperienceText>
            <Company>
              <CompanyImage size={'20px'} src={broadsheetLogo}/>
              {/* <CompanyTitle> Python and Django Full Stack Web Developer </CompanyTitle> */}
            </Company>
            <Company>
              <CompanyImage size={'80px'} src={smartvelLogo}/>
              {/* <CompanyTitle> Python Developer </CompanyTitle> */}
            </Company>
            <Company>
              <CompanyImage size={'55px'} src={ruLogo}/>
              {/* <CompanyTitle> Teaching Assistant </CompanyTitle> */}
            </Company>
          </ExperienceText>
        </ExperienceWrapper>
        <CvWrapper>
          <CvLink href={pdf} target="_blank">Curriculum Vitae</CvLink>
        </CvWrapper>
      </Container>
    );
  }
}


export default MainPage;
