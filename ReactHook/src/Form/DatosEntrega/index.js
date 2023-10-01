import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [addres, setAddres] = useState({
    value: "",
    valid: null,
  });
  const [city, setCity] = useState({
    value: "",
    valid: null,
  });
  const [province, setProvince] = useState({
    value: "",
    valid: null,
  });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        updateStep(3)
        console.log(addres, city, province)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={addres.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value)
          setAddres({ value, valid });
        }}
        error={addres.valid === false}
        helperText={
          addres.valid === false &&
          "Ingresa un dato válido, Al menos 2 caracteres y máximo 30."
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value)
          setCity({ value, valid });
        }}
        error={city.valid === false}
        helperText={
          city.valid === false &&
          "Ingresa un dato válido, Al menos 2 caracteres y máximo 30."
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value)
          setProvince({ value, valid });
        }}
        error={province.valid === false}
        helperText={
          province.valid === false &&
          "Ingresa un dato válido, Al menos 2 caracteres y máximo 30."
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
