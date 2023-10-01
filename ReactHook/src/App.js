import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import { Button } from "@mui/material";

function App() {
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button> - </Button>
          <Button> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
