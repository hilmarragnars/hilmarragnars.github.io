import React from 'react';
import styled from 'styled-components';
import broadsheetLogo from '../../assets/broadsheet-logo.svg';
import ruLogo from '../../assets/ru-univercity.png';
import smartvelLogo from '../../assets/smartvel-logo.jpg';

const ExperienceWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray_light};
  border-right: 1px solid ${props => props.theme.gray_light};
  display: flex;
  padding: 64px 8px 56px 0;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column;
    padding: 32px 8px 32px 8px;
  }
`

const VerticalCaption = styled.span`
  color: gray;
  font-size: 32px;
  text-align: center;
  writing-mode: vertical-rl;
  @media (max-width: ${props => props.theme.mobile_size}) {
    writing-mode: horizontal-tb;
    margin-bottom: 48px;
  }
`
const ExperienceText = styled.div`
  margin-left: 48px;
  flex-grow: 1;
  @media (max-width: ${props => props.theme.mobile_size}) {
    margin-left: 0;
  }
`
const Company = styled.div`
  margin-bottom: ${props => props.marginBottom};
`
const CompanyTitle = styled.h3`
  margin: ${props => props.marginTop} 0;
  font-weight: normal;
  span {
    color: gray;
    font-size: 0.8em;
    margin-left: 16px;
  }
`
const CompanyImage = styled.img`
  height: ${props => props.size};
`
const ExperienceListWrapper = styled.div`
`

const Experience = function(props) {
  return (
    <ExperienceWrapper>
      <VerticalCaption pos={'left'}>Experience</VerticalCaption>
      <ExperienceText>
        <Company marginBottom={'48px'}>
          <a href='https://www.broadsheet.com.au/' target='_balnk'><CompanyImage size={'30px'} src={broadsheetLogo}/></a>
          <CompanyTitle marginTop={'16px'}> Python and Django Full Stack Web Developer <span>2017-2019</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Backend improvements and new developments in Django (Django REST framework).</li>
              <li>Intense frontend work with React Redux. </li>
              <li>Converted the CSS for the whole application from external files to Styled Components.</li>
              <li>Developed a website in Django that is used by the marketing department to present to potential advertisers.</li>
            </ul>
          </ExperienceListWrapper>
        </Company>
        <Company marginBottom={'64px'}>
          <a href='https://www.smartvel.com/' target='_balnk'><CompanyImage size={'100px'} src={smartvelLogo}/></a>
          <CompanyTitle marginTop={'0'}> Python Developer <span>2016-2017</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Contributed to the development of their web scraping engine written in Python.</li>
              <li>Tougth them how to speak with whales.</li>
              <li>Worked mainly in Django, filtering and sorting data.</li>
              <li>Was in charge of developing tests for the frontend.</li>
            </ul>
          </ExperienceListWrapper>
        </Company>
        <Company marginBottom={'0'}>
          <a href='https://en.ru.is/' target='_balnk'><CompanyImage size={'55px'} src={ruLogo}/></a>
          <CompanyTitle marginTop={'16px'}> Teaching Assistant <span>2014-2015</span></CompanyTitle>
          <ExperienceListWrapper>
            <ul>
              <li>Programming (c++)</li>
              <li>Data Structures</li>
              <li>Software Designing</li>
            </ul>
          </ExperienceListWrapper>
        </Company>
      </ExperienceText>
    </ExperienceWrapper>
  );
};

export default Experience;
