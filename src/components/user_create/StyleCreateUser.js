import styled from 'styled-components'
const white = '#fff'
const black = '#000'

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5em;
    

`
export const ConteinerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    border-radius: 5px;
    background-color: ${white};
    box-shadow: 5px 5px #aaa;
    border: 1px solid ${black} ;

`
export const InputStyle = styled.input`
    margin: 5px 0;
    padding: 10px;
    width: 250px;

`
export const InputBTN = styled.input`

    margin-top: 20px;
    padding: 10px;
    font-weight: bold;
  
    background-color: ${white};
    border: 1px solid ${black};
    width: 200px;
    font-size: 20px;
    
    &:hover{
        background-color: ${black};
        border: solid 1px ${white};
        color: ${white};
        cursor: pointer;
    }
`

export const ConteinerBTNCreateUser = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 50px;

`
export const BtnCreateUse = styled.button`

    padding: 1em;
    width: 200px;
    color:#fff;
    font-size: 20px;
    border: solid 1px #000;
    background-color: #000;
    &:hover{
        background-color: #fff;
        color: #000;
        box-shadow: 3px 3px gray;
    }
`
