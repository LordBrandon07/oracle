import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function App() {

  const handleSumbit = (valores) => {
    console.log("appjs: ",valores)
  }

  return (
    <Container 
      component="section"
      maxWidth="sm"
      >
      <Typography variant='h3' align='center' component="h1">Form</Typography>
      <FormSignUp handleSumbit={handleSumbit}/> 
    </Container>
    
  );
}

export default App;
