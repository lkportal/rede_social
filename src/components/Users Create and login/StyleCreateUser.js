import styled from 'styled-components'
const blue = '#4CA9FF'
const blue_dark = '#438FE0'
const red_light = '#E06057'
export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5em;
    

`
export const ConteinerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    border-radius: 5px;
    background-color: ${blue};

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
    background-color: ${blue_dark};
    border: 1px solid ${blue_dark};
    width: 200px;
    font-size: 20px;
    
    &:hover{
        background-color: ${red_light};
        border: solid 1px ${red_light};
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
