import React from 'react'
import styled from 'styled-components'

const Project = ({ project }) => {
    return (
        <ProjectBox ref={project}>
            Project
        </ProjectBox>
    )
}

export default Project

const ProjectBox = styled.div`
  height: 500px;  
`;