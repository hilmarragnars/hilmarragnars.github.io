import React from 'react';
import styled from 'styled-components';
import ruLogo from '../../assets/ru-logo-simple.jpg';
import carlosLogo from '../../assets/carlos-logo.png';

const EducationWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.gray_light};
  border-left: 1px solid ${props => props.theme.gray_light};
  padding: 80px 8px 80px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.mobile_size}) {
    flex-direction: column-reverse;
  }
`
const Univercity = styled.div`
  text-align: center;
  flex-basis: 47%;
`
const EduCaption = styled.span`
  color: gray;
  font-size: 32px;
  text-align: center;
  writing-mode: vertical-rl;
  flex-basis: 6%;
  @media (max-width: ${props => props.theme.mobile_size}) {
    writing-mode: horizontal-tb;
    margin-bottom: 32px;
  }
`
const UniLogo = styled.img`
  height: ${props => props.size}
`
const UniInfo = styled.div`
`
const UniTitle = styled.h3`
  font-weight: normal;
  span{
    color: gray;
    font-size: 0.8em;
  }
`
const UniDesc = styled.p``

const Education = function(props) {
  return (
    <EducationWrapper>
      <Univercity>
        <UniLogo size={'40px'} src={ruLogo}/>
        <UniInfo>
          <UniTitle>Reykjavík University<br/><span>2013-2016</span></UniTitle>
          <UniDesc>Bachelor of Science (BSc), Computer Software Engineering</UniDesc>
        </UniInfo>
      </Univercity>
      <Univercity>
        <UniLogo size={'40px'} src={carlosLogo}/>
        <UniInfo>
          <UniTitle>Univercity Carlos III of Madrid<br/><span>2015-2016</span></UniTitle>
          <UniDesc>Exchange student in Madrid for one year</UniDesc>
        </UniInfo>
      </Univercity>
      <EduCaption>Education</EduCaption>
    </EducationWrapper>
  );
};

export default Education;
