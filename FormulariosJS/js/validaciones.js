console.log('viva colombia, viva falcao')

export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid') 
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add('input-container--invalid') 
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'valueMissing',
]

const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:"Mínimo ocho caracteres, al menos una letra y un número",
    },
    nacimiento: {
      valueMissing: "Este campo no puede estar vacío",
      customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"el formato es XXXXXXXXXX - 10 numeros",
    },
    direccion: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"debe contener entre 10 a 40 caracterés",
    },
    ciudad: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"debe contener entre 3 a 40 caracterés",
    },
    estado: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch:"debe contener entre 3 a 40 caracterés",
    },
  };

const validadores = {
    nacimiento: input => validarNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje = '';
  tipoDeErrores.forEach(error =>{
    if (input.validity[error]){
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  })
  return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(!mayorDeEdad(fechaCliente)){
        mensaje = 'No cumples con la edad minima'
    }
    mayorDeEdad(fechaCliente);
    
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return fechaActual >= diferenciaFechas;
}