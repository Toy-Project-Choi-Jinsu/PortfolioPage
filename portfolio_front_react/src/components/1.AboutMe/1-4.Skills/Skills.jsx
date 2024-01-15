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
            {setSkills("Backend", ["Node.js (Express)", "Javascript", "Flutter (Dart), Android (Kotlin)", "MySQL, FireBase (FireStore)", "AWS EC2"])}
            <hr color={"whitesmoke"} />
            {setSkills("Frontend", ["HTML, CSS, Javascript", "React.js", "Flutter (Dart), Android (Kotlin)"])}
            <hr color={"whitesmoke"} />
            {setSkills("Tool", ["Git, GitHub", "Notion", "VSCode, Android Studio, IntelliJ", "Jupiter Notebook, Google Colab"])}
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