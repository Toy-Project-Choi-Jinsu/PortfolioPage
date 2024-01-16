import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const SideBar = ({ aboutMe, training, awards, project }) => {

    // 화면 크기에 따라 사이드바 모양 변경
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    const handelResize = () => {
        setPageWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handelResize);
        return () => {
            window.removeEventListener("resize", handelResize);
        };
    }, []);

    // 스크롤 위치에 따라 사이드바에 Bold 효과 넣기
    // const [contentName, setContentName] = useState("ABOUT ME")
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
        if (refTopPosition < 55 && refBottomPosition > 5 && pageWidth >= 430) {
            return { fontSize: "22px", color: "white", fontWeight: "bold" }
        } else if (refTopPosition < 55 && refBottomPosition > 5 && pageWidth < 430) {
            return { zIndex: 100 }
        }
    }

    return (
        <SideBarBox>
            {pageWidth < 430 ?
                <>
                    <div className='userBox'>
                        <img src="data:image/jpeg;base64,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2koCk3tUGfDn30it/ObFLJoryA8Mj7xA146sVE/scdiAPZqinXXzLKHP6pb/APjceoyqYOryulWhfxIZ/lNlNPkzD3H5gme2bmv6T+8pePN+lpvU+2rWxy+thKDfgxV7/rpLLf2vF8dG1/EV8KR8aoM2y7cl/Uf+2e7TeyP1f0lfw4/i35dOaawaOxlZ1rUdH11qqAh2quFCVKd77LEVSQRdiCOZHGW9EaA0gK61qmEpjYB2EfEqAHYbJdiiPuUsAB7R6Tp+03s/ETzab2R+r+ktMZk6T+bfXXbWl0Xjntt1cNQHEU0eu3k7lFHmhl6lqjQuHxLVMSy5g12DIvUUgBTHjs36yfsx4geAufef2ngpDebk9c/cNw8omMz4il1q/NUo2QCAWGQNrKB0HHyy6y4lO2e8neTvP9OkuxLqkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==" alt="프로필 사진" />
                        <div>최진수</div>
                    </div>
                    <div className='contents'>
                        <div onClick={() => { moveToContent(aboutMe) }} className='aboutMe' style={setCSS(aboutMe)}>ABOUT ME</div>
                        <div onClick={() => { moveToContent(training) }} style={setCSS(training)}>TRAINING</div>
                        <div onClick={() => { moveToContent(awards) }} style={setCSS(awards)}>AWARDS</div>
                        <div onClick={() => { moveToContent(project) }} style={setCSS(project)}>PROJECT</div>
                    </div>
                </>
                :
                <>
                    <div className='userBox'>
                        <img src="data:image/jpeg;base64,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2koCk3tUGfDn30it/ObFLJoryA8Mj7xA146sVE/scdiAPZqinXXzLKHP6pb/APjceoyqYOryulWhfxIZ/lNlNPkzD3H5gme2bmv6T+8pePN+lpvU+2rWxy+thKDfgxV7/rpLLf2vF8dG1/EV8KR8aoM2y7cl/Uf+2e7TeyP1f0lfw4/i35dOaawaOxlZ1rUdH11qqAh2quFCVKd77LEVSQRdiCOZHGW9EaA0gK61qmEpjYB2EfEqAHYbJdiiPuUsAB7R6Tp+03s/ETzab2R+r+ktMZk6T+bfXXbWl0Xjntt1cNQHEU0eu3k7lFHmhl6lqjQuHxLVMSy5g12DIvUUgBTHjs36yfsx4geAufef2ngpDebk9c/cNw8omMz4il1q/NUo2QCAWGQNrKB0HHyy6y4lO2e8neTvP9OkuxLqkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==" alt="프로필 사진" />
                        <div>최진수 | 백엔드 개발자</div>
                    </div>
                    <div className='contents'>
                        <hr color={"#bdbdbd"} />
                        <div onClick={() => { moveToContent(aboutMe) }} style={setCSS(aboutMe)}>About Me</div>
                        <hr color={"#bdbdbd"} />
                        <div onClick={() => { moveToContent(training) }} style={setCSS(training)}>Training</div>
                        <hr color={"#bdbdbd"} />
                        <div onClick={() => { moveToContent(awards) }} style={setCSS(awards)}>Awards</div>
                        <hr color={"#bdbdbd"} />
                        <div onClick={() => { moveToContent(project) }} style={setCSS(project)}>Project</div>
                        <hr color={"#bdbdbd"} />
                    </div>
                </>
            }
        </SideBarBox>
    )
}

export default SideBar

const SideBarBox = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px;
    top: 0;
    right: 0;
    width: 15%;
    height: 100vh;
    background-color: #5477AD;

    & .userBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 30%;
        width: 100%;
        & img{
            width: 200px;
            height: 200px;
            border: 1px solid black;
            border-radius: 100px;
        }

        & div{
            font-size: 21px;
            font-weight: bold;
            margin-top: 25px;
            color: white;
        }
    }

    & .contents{
        width: 100%;
        font-size: 20px;
        color: #bdbdbd;
        & div{
            cursor: pointer;
            height: 20px;
            margin: 25px 0 25px 0;
        }

        & div:hover{
            font-size: 22px;
            font-weight: bold;
            color: white;
        }
    }

    @media only screen and (max-width: 430px) {
        padding: 0;
        width: 60px;
        & .userBox{
            justify-content: center;
            & img{
                width: 49px;
                height: 49px;
                border: 1px solid black;
                border-radius: 100px;
            }

            & div{
                font-size: 33px;
                writing-mode: vertical-rl;
                text-orientation: upright;
                white-space: nowrap;
                margin: 10px 0 0 4px;
            }
        }

        & .contents{
            width: 50px;
            font-size: 35px;
            font-weight: bold;
            color: white;

            & .aboutMe{
                z-index: 10;
            }

            & div{
                position: fixed;
                background-color: #5477AD;
                display: flex;
                align-items: center;
                justify-content: center;
                writing-mode: vertical-rl;
                text-orientation: upright;
                white-space: nowrap; 
                height: 50%;
                margin: 0 0 0 4px;
                cursor: default;
            }

            & div:hover{
                font-size: 35px;
                font-weight: bold;
                color: white;
            }
        }
    }

`;