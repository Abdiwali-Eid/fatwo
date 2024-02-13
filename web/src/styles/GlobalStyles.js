  
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: rgb(85, 128, 170);
    --secondary: rgb(85, 128, 170);
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: rgb(240, 242, 245);
    --black-2: rgb(85, 128, 170);
    --white-1: #C6BED9;
    --gray: #283739;
    --grey: var(--gray);
    --white: #121826;
    --black: black;
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter';
    background: var(--black-1);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
