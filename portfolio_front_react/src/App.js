import { useRef } from "react";
import SideBar from "./components/0.SideBar/SideBar";
import AboutMe from "./components/1.AboutMe/AboutMe";
import Training from "./components/2.Training/Training";
import Awards from "./components/3.Awards/Awards";
import Project from "./components/4.Project/Project";

import styled from "styled-components"

function App() {
  const aboutMeRef = useRef();
  const trainingRef = useRef();
  const awardsRef = useRef();
  const projectRef = useRef();

  return (
    <PortfolioPage>
      <div>
        <AboutMe aboutMe={aboutMeRef} />
        <Training training={trainingRef} />
        <Awards awards={awardsRef} />
        <Project project={projectRef} />
      </div>
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
  justify-content: center;
  height: 2500px;
`;