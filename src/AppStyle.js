import styled,{ createGlobalStyle } from 'styled-components'


 export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  *{
    font-family: 'Roboto';
  }
a{
  text-decoration: none;
  font-weight: bold;
  margin: 20px;
  color: #fff;
}
`



export const ConteinerLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
   background-color: #000;

`
export const LinkStyle = styled.a`
  text-decoration: none;
  margin: 20px;


`
    


