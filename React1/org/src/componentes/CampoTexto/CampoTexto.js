import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeHolderModified = `${props.placeholder}...` 

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo_texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModified} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto