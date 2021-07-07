import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
:root{
  --dark-900: #172626;
  --dark-700: #13261F;
  --dark-500: #1C5936;
  --dark-300: #268C4A;
  --white: #f7f7f7;
  --green-dark: #90CB40;

}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  body{
    background-color: var(--dark-900);
    color: var(--white);
  }

a{
  color: inherit;
}
  a,li{
    list-style: none;
    text-decoration: none;
  }

`;

export default GlobalStyle;
