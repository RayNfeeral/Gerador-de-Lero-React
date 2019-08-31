import React from 'react'
import styled from 'styled-components'

const Lero = styled.div`
    display: ${(props) => props.frase === '' ? 'none' : 'auto'}
    text-align: justify;
    align-self: center;
    margin: 30px;
    font-size: 20px;
    max-width: 500px;
`

function Texto(props){
    return(
        <Lero>{props.frase}</Lero>
    )
}

export default Texto;