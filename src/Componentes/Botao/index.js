import React from 'react'
import styled from 'styled-components'

const BotaoLeroLero = styled.button`
    font-size: 50px;
    font-weight: 400;
    background-color: lightgray;
    border-radius: 5px;
    height: 75px;
    margin: 30px;
    align-self: center;
`

function Botao(props){
    return(
        <BotaoLeroLero onClick={props.onClick}>Lero Lero</BotaoLeroLero>
    )
}

export default Botao;