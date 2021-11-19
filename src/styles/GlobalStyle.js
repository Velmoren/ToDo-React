import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
      box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }
  
  body {
      background-color: #edf0f1;
      padding: 80px 0 0 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.429;
      color: black;
  }
`

export default GlobalStyle;