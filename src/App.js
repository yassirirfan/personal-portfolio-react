import React from "react";
import { MainBody } from './styles/Global.styled';
import { theme } from './utils/Theme';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody />
    </ThemeProvider>
  );
}

export default App;
