import { useEffect, useRef } from "react";
import SideBar from "./components/0.SideBar/SideBar";
import AboutMe from "./components/1.AboutMe/AboutMe";
import Training from "./components/2.Training/Training";
import Awards from "./components/3.Awards/Awards";
import Project from "./components/4.Project/Project";

import styled from "styled-components"
import { GoMoveToTop } from "react-icons/go";

function App() {
  const pageRef = useRef();
  const aboutMeRef = useRef();
  const trainingRef = useRef();
  const awardsRef = useRef();
  const projectRef = useRef();

  const moveToTop = () => {
    pageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PortfolioPage ref={pageRef}>
      <Contentes>
        <AboutMe aboutMe={aboutMeRef} />
        <Training training={trainingRef} />
        <Awards awards={awardsRef} />
        <Project project={projectRef} />
        <GoMoveToTop onClick={moveToTop} />
      </Contentes>
      <SideBar
        aboutMe={aboutMeRef}
        training={trainingRef}
        awards={awardsRef}
        project={projectRef}
      />
    </PortfolioPage>
  );
}

export default App;

const PortfolioPage = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  height: 2500px;
`;

const Contentes = styled.div`
width: 70%;
padding: 30px 10% 30px 10%;
/* border: 1px solid black; */
  & svg{
    position: fixed;
    right: 18%;
    bottom: 2%;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    color: white;
    background-color: #5477AD;
    cursor: pointer;
  }
`