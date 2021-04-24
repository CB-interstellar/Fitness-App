import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #1d2a73;
    margin: 0;
    }
  
   h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 43.88px;
   }
  
   h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29.26px;
   }
  
   h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;
   }
  
  .small-text {
    font-size: 12px;
    line-height: 15px;
  }
  
  .nav-text {
    font-size: 10px;
    line-height: 11.72px;
  }
`;

export default GlobalStyle;
