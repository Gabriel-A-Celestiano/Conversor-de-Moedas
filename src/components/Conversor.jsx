import React, {useState} from 'react'
import './Conversor.css'

const Conversor = (props) => {
    const [moedaA, setMoedaA] = useState("")
    const [moedaB, setMoedaB] = useState("")
    
    function converter() {
        let de_para = `${props.moedaA}_${props.moedaB}`
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=ultra&apiKey=c0e646585b759fbb1ea0`

        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            let cotacao = json[de_para]
            setMoedaB((parseFloat(moedaA) * cotacao).toFixed(2))
            
        })
        
    }
    
    return (
        <div className="Conversor">
            <div className="card">
                <div className="box">
                    <div className="img">
                    </div>
                    <div className="content">
                        <h2>{props.moedaA} para {props.moedaB}</h2>
                        <input type="text" onChange={(e) => setMoedaA(e.target.value)}></input>
                        <button type="button" onClick={ converter }>Converter</button>
                        <h2>R$: { moedaB }</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversor