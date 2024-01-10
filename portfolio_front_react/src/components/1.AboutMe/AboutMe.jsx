import React from 'react'
import styled from 'styled-components'

const AboutMe = ({ aboutMe }) => {
    return (
        <AboutMeBox ref={aboutMe}>
            AboutMe
        </AboutMeBox>
    )
}

export default AboutMe

const AboutMeBox = styled.div`
  height: 500px;
`;