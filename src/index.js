import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

    const [estado, setEstado] = useState("ENTRADA")

    const [palpite, setPalpite] = useState(150)

    const [numPalpites, setNumPalpites] = useState(1)

    const [min, setMin] = useState(0)

    const [max, setMax] = useState(300)
    
    const iniciarJogo = () => {
        setEstado('RODANDO')
        setMin(0)
        setMax(300)
        setNumPalpites(1)
        setPalpite(150)        
    }

    if (estado === 'ENTRADA') {
        return (
            <center>
                <div>
                    <button onClick={iniciarJogo}>Começar o jogo!</button>
                </div>
            </center>
        )
    }    

    const menor = () => {
        setNumPalpites(numPalpites + 1)
        setMax(palpite)
        const proxPalpite = parseInt((palpite - min) / 2) + min
        setPalpite(proxPalpite)
    }

    const maior = () => {
        setNumPalpites(numPalpites + 1)
        setMin(palpite)
        const proxPalpite = parseInt((max - palpite) / 2) + palpite
        setPalpite(proxPalpite)
    }

    const acertou = () => {
        setEstado('FIM')        
    }

    const restart = () => {
        setEstado('ENTRADA')
    }

    if(estado === 'FIM') {
        return(
            <center>
                <div>
                    <p>Acertei o número {palpite} com {numPalpites} chute(s)!</p>
                    <button onClick={restart}>Tela inicial</button>
                </div>
            </center>
        )
    }

    return (
        <center>
            <div>
                <p>O seu número é {palpite}?</p>
                <button onClick={menor}>Menor</button>
                <button onClick={acertou}>Acertou</button>
                <button onClick={maior}>Maior</button>
            </div>
        </center>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

