import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";
import Step from "./Step";

const Form = () => {

  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({}); 

  useEffect(() => {
    console.log("useEffect")
  })

  useEffect( () => {
    console.log("se actualizo el step: ", step)
  }, [step])

  // const selectStep = () => {
  //   switch (step){
  //     case 0: return <DatosUsuario />
  //     break;
  //     case 1: return <DatosPersonales />
  //     break;
  //     case 2: return <DatosEntrega />
  //     break;
  //     default: return <Complete />
  //     break;}
  // }

  const updateStep = (step) => {
    console.log("update: ",step );
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>, 
    1: <DatosPersonales updateStep={updateStep}/>, 
    2: <DatosEntrega updateStep={updateStep}/>, 
    3: <Complete />}

    const onSubmit = (e) => {
      e.preventDefault();
      let newStep  = step + 1
      setStep(newStep)
    }

    const handleChange = (element, position, currentStep, validator) => {
      const value = element.target.value;
      const valid = validator(value);

      console.log(valid)
      console.log(value);
      console.log("position: ", position);
      console.log("currentStep: ", currentStep);
      console.log("validator: ", validator);

      stepsFlow[0].inputs[0].label = "nombre";
      console.log(stepsFlow);

    }


    const stepsFlow = {
      0: {
        inputs: [
          {
            label:"Correo electrónico",
            type:"email",
            value: "",
            valid: null,
            onChange: handleChange,
            helperText: "Ingresa un correo electrónico válido.",
            validator: validarEmail,    
          },
          {
            label:"Contraseña",
            type:"password",
            value: "",
            valid: null,
            onChange: handleChange,
            helperText: "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
            validator: validarPassword,
          }
        ],
        buttonText: "Siguiente",
        onSubmit
      },
      1: {
        inputs: [
          {
            label:"Correo electrónico",
            type:"email",
            value: "",
            valid: null,
            onChange: handleChange,
            helperText: "Ingresa un correo electrónico válido.",
            validator: validarEmail,    
          },
          {
            label:"Contraseña",
            type:"password",
            value: "",
            valid: null,
            onChange: handleChange,
            helperText: "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
            validator: validarPassword,
          }
        ],
        buttonText: "Siguiente",
        onSubmit
      },
    }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}/>}
        {/* {steps[step]} */}
        <Step data= {stepsFlow[step]} step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
