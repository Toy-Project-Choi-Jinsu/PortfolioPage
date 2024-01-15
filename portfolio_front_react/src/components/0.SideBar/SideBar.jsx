import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const SideBar = ({ aboutMe, training, awards, project }) => {

    const [position, setPosition] = useState(0);
    function onScroll() {
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const moveToContent = (contentRef) => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const setCSS = (contentRef) => {
        const refTopPosition = contentRef.current?.getBoundingClientRect().top;
        const refBottomPosition = contentRef.current?.getBoundingClientRect().bottom
        if (refTopPosition < 55 && refBottomPosition > 5) {
            return { fontSize: "22px", color: "black", fontWeight: "bold" }
        }
    }

    return (
        <SideBarBox>
            <div onClick={() => { moveToContent(aboutMe) }} style={setCSS(aboutMe)}>About Me</div>
            <div onClick={() => { moveToContent(training) }} style={setCSS(training)}>Training</div>
            <div onClick={() => { moveToContent(awards) }} style={setCSS(awards)}>Awards</div>
            <div onClick={() => { moveToContent(project) }} style={setCSS(project)}>Project</div>
        </SideBarBox>
    )
}

export default SideBar

const SideBarBox = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    top: 30%;
    right: 3%;
    width: 100px;
    height: 200px;
    border: 1px solid black;
    font-size: 20px;
    color: grey;
    & div{
        cursor: pointer;
        height: 20px;
    }

    & div:hover{
        font-size: 22px;
        font-weight: bold;
        color: black;
    }
`;