import  { createGlobalStyle }  from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #171717;
    color: #fff;
    -webkit-font-smoothing: antialiased;

    height: 100vh;

    display: flex;
    align-items: center;

    flex-direction: column;


  }
 
 a {
  text-decoration: none;
  color: inherit;
 }
`