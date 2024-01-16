import React, { useState } from 'react'
import styled from 'styled-components'

const Project = ({ project }) => {
    const [teamProject, setTeamProject] = useState(
        [
            {
                name: "Travel Mate",
                date: "2023.07 ~ 2023.08",
                skills: ["React.js", "FireStore", "Flask", "Python"],
                img: "1"
            },
            {
                name: "Rhythm Care",
                date: "2023.11 ~ 2023.12",
                skills: ["Express", "MySQL", "React.js", "Styled - Component", "Dart", "Kotlin"],
                img: "2"
            }
        ]
    );

    const [personalProject, setPersonalProject] = useState(
        [
            {
                name: "Back Board",
                date: "2023.07 ~ 2023.08",
                skills: ["React.js", "Styled - Component", "Java", "Spring", "MySQL", "Docker", "nginx"],
                img: "1"
            },
            {
                name: "Portfolio",
                date: "2023.11 ~ 2023.12",
                skills: ["React.js", "Styled - Component", "Java", "Spring", "MySQL", "Docker", "nginx"],
                img: "2"
            },
            {
                name: "숫자야구",
                date: "2023.07 ~ 2023.08",
                skills: ["HTML", "Javascript", "CSS", "Java", "Spring", "MySQL", "Docker", "nginx"],
                img: "3"
            }
        ]
    );
    return (
        <ProjectBox ref={project}>
            <Title>🛠️PROJECT</Title>
            <SmallTitle>팀 프로젝트</SmallTitle>
            <Contents>
                {teamProject.map((data) => {
                    return (
                        <div className='content' key={data.img}>
                            <img src={data.img} alt={data.name} />
                            <div className='date'>{data.date}</div>
                            <div className='school'>{data.name}</div>
                            <div className='skills'>
                                {data.skills.map((skill) => {
                                    return (
                                        <span className='skillName' key={skill}>{skill}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Contents>
            <SmallTitle>개인 프로젝트</SmallTitle>
            <Contents>
                {personalProject.map((data) => {
                    return (
                        <div className='content' key={data.img}>
                            <img src={data.img} alt={data.name} />
                            <div className='date'>{data.date}</div>
                            <div className='school'>{data.name}</div>
                            <div className='skills'>
                                {data.skills.map((skill) => {
                                    return (
                                        <span className='skillName' key={skill}>{skill}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Contents>
            <hr color={"whitesmoke"} />
        </ProjectBox>
    )
}

export default Project

const ProjectBox = styled.div`
`;

const Title = styled.h1`
    color: #5477AD;
`

const SmallTitle = styled.h2`
    color: #5477AD
`

const Contents = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(360px, auto));
    gap: 15px;

    & .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 360px;
        margin-bottom: 50px;

        & img{
            height: 300px;
            border: 1px solid black;
            border-radius: 10px;
        }
        
        & .date{
            font-size: 14px;
            color: grey;
        }
        
        & .school{
            font-size: 20px;
            font-weight: bold;
            margin: -5px 0 -5px 0;
        }
        
        & .skills{
            & .skillName{
                display: inline-block;
                width: fit-content;
                margin: 2px;
                padding: 3px 9px 3px 9px;
                background-color: rgb(84,119,173);
                border-radius: 20px;
                color: white;
                font-size: 12px;
            }
        }

        @media only screen and (max-width: 430px) {
            width: 280px;
            & img{
                height: 200px;
            }
        }
    }
`