import React from 'react'
import styled from 'styled-components'
import Intro from './1-1.Intro/Intro'
import Contact from './1-2.Contact/Contact'
import Education from './1-3.Education/Education'
import Skills from './1-4.Skills/Skills'

const AboutMe = ({ aboutMe }) => {
    return (
        <AboutMeBox ref={aboutMe}>
            <Title>ABOUT ME</Title>
            <div className='introContact'>
                <Intro />
                <Contact />
            </div>
            <Education />
            <hr color={"whitesmoke"} />
            <Skills />
            <hr color={"whitesmoke"} />
        </AboutMeBox>
    )
}

export default AboutMe

const AboutMeBox = styled.div`
    width: 100%;
  & .introContact{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & hr{
    margin-top: 20px;
  }
`;

const Title = styled.h1`
    color: #5477AD;
`