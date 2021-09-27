import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap');

  :root {
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    background: #100E1D;
    color: var(--white);
  }
`;
