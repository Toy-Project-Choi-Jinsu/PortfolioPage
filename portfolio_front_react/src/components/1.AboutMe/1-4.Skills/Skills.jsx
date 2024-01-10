import React from 'react'
import styled from 'styled-components'

const Skills = () => {
    const setSkills = (categori, skills) => {
        return (
            <Contents>
                <div className='skillCategori'>
                    {categori}
                </div>
                <div className='skllName'>
                    {skills.map((name) => {
                        return (
                            <li key={name}>{name}</li>
                        )
                    })}
                </div>
            </Contents>
        );
    }
    return (
        <SkillsBox>
            <Title>SKILLS</Title>
            {setSkills("Backend", ["하나", "둘", "셋", "넷"])}
            <hr color={"whitesmoke"} />
            {setSkills("Frontend", ["하나", "둘", "셋"])}
            <hr color={"whitesmoke"} />
            {setSkills("Tool", ["하나", "둘", "셋", "넷"])}
        </SkillsBox>
    )
}

export default Skills

const SkillsBox = styled.div`
    width: 100%;
    margin-top: 30px;

    & hr{
        margin-bottom: 20px;
    }
`

const Title = styled.h2`
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    width: 100%;

    & .skillCategori{
        width: 20%;
        font-weight: bold;
    }
`