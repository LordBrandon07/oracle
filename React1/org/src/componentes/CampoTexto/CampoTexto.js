import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log(props)
    const placeHolderModified = `${props.placeholder}...` 
    return <div className="campo_texto">
        <label>{props.titulo}</label>
        <input placeholder={placeHolderModified} required={props.required}/>
    </div>
}

export default CampoTexto