import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: #cae9ff;

  }
`;

export default GlobalStyles;
