import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("aaaaaaaa", e)
        let datosAEnviar = {
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresa un nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresa un puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresa un enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto} 
            />
            {/* <CampoTexto titulo="Equipo" placeholder="Ingresa un equipo"/> */}
            <ListaOpciones
                valor={equipo} 
                actualizarEquipo={actualizarEquipo} 
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario