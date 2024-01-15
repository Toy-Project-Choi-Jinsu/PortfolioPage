import React from 'react'
import styled from 'styled-components'

const Project = ({ project }) => {
    return (
        <ProjectBox ref={project}>
            <Title>🛠️PROJECT</Title>
            <Contents>
                <img src="" alt="프로젝트 대표 이미지" />
                <div className='date'>2023.06 ~ 2023.12</div>
                <div className='school'>광주인공지능사관학교</div>
                <div className='skills'>
                    <div className='skillName'>React.js</div>
                    <div className='skillName'>Styled-Component</div>
                </div>
            </Contents>
            <hr color={"whitesmoke"} />
        </ProjectBox>
    )
}

export default Project

const ProjectBox = styled.div`
  height: 500px;  
`;

const Title = styled.h1`
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    & img{
        width: 150px;
        height: 150px;
        border: 1px solid black;
        border-radius: 10px;
    }

    & .date{
        font-size: 14px;
        color: grey;
    }

    & .school{
        font-weight: bold;
        margin: 3px 0 3px 0;
    }

    & .skills{
        display: grid;

        & .skillName{
            width: fit-content;
            padding: 3px 9px 3px 9px;
            margin: 1.5px;
            background-color: rgb(84,119,173);
            border-radius: 20px;
            color: white;
            font-size: 12px;
        }
    }
`