import React, { useRef } from 'react'
import styled from 'styled-components'

const SideBar = ({ aboutMe, training, awards, project }) => {


    const moveToContent = (contentRef) => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <SideBarBox>
            <div onClick={() => { moveToContent(aboutMe) }}>About Me</div>
            <div onClick={() => { moveToContent(training) }}>Training</div>
            <div onClick={() => { moveToContent(awards) }}>Awards</div>
            <div onClick={() => { moveToContent(project) }}>Project</div>
        </SideBarBox>
    )
}

export default SideBar

const SideBarBox = styled.div`
    position: fixed;
    top: 50%;
    right: 0;
`;