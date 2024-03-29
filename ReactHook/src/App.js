import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { useContext } from "react";
import Form from "./Form";
import { Button } from "@mui/material";
import { CounterContext } from "./Context";

function App() {
  const counterData = useContext(CounterContext);
  console.log(counterData);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button onClick={() => counterData.resta()}> - </Button>
          <Button onClick={() => counterData.suma()}> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
