import React from "react";
import { Container, MainBody } from './styles/Global.styled';
import { theme } from './utils/Theme';
import { ThemeProvider } from "styled-components";

// Components
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
            <Showcase />
            <MySkills />
            <MyProjects />
            <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
