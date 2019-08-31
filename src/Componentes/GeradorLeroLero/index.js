import React from 'react'
import Texto from '../Texto'
import Botao from '../Botao'
import styled from 'styled-components'

const Banner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 33vh;
    margin-top: 33vh;
    background-color: lightblue;
`

function GeradorLeroLero(){
    const [state, setState] = React.useState({frase: ''});

    const clique = () => {
        const API = "https://testapi.io/api/matheusrod92/lero-lero";
        

        
        fetch(API)
        .then(response => response.json())
        .then(result => {
            const id = Math.floor(Math.random() * result.length);
            setState({frase: result[id].frase})
        })
    }
    

    return (
            <Banner>
                <Texto frase={state.frase}/>
                <Botao onClick={clique}/>
            </Banner>
    )
}

export default GeradorLeroLero;