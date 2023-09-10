import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MyOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <div></div>}
      {/* {mostrarFormulario && <Formulario/>} */}
      
      <MyOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
