import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
     
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
      background-color: #edf0f1;
      padding: 50px 0 0 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.429;
      color: black;
  }

  $primary-color: #4682b4;
`

export default GlobalStyle;