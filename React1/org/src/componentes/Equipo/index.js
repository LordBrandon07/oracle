import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //destructuracion: permite extraer valores de arreglos o propiedades de objetos en distintas variables

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores, eliminarColaborador}= props


    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor: colorSecundario}}>
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">

                {/* sin destructuracion */}
                {/* return <section className="equipo" style={{backgroundColor: props.datos.colorSecundario}}>
                <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
                <div className="colaboradores"> */} 

                
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario = {colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }</>
}

export default Equipo
