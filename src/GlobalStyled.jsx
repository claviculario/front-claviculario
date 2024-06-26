import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  html {
    width: auto;    
  }

  body {
    max-width: 100vw;
    height: 100vh;
    padding: 0 10px;
  }
  
  #root{
    height: 100%;
  }
`;
