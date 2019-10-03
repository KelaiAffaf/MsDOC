import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './types'
import {darkBleu } from './colors';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet');
  html {
    font-size: 10px;
  }
  body {
    ${fontFamily};
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    color: ${darkBleu}
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${darkBleu};
  }

  input{
    margin: 2rem;
  }

`;

export default GlobalStyle;
