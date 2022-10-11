import React, { MouseEvent }from "react";
import { useDispatch , useSelector} from "react-redux";
import {Container, Box, Button} from '@mui/material';
import { increment, decrement } from "../reducers/usersSlice";

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const userSliceState = useSelector(state=>state)
  console.log('what is userSliceState', userSliceState)

  const handleButtonClick = (e: MouseEvent <HTMLButtonElement>)=>{
    const { name } = e.currentTarget 
    dispatch( name === 'dec' ? decrement() : increment() )
  }


  return (
    <Container sx={{
      // bgcolor: "red"
      }}>
      <h1>heyTim</h1>
      <p>Hello</p>
    
      <Box sx={{ display: 'flex', "& button" : { margin: "0 .5rem", background: 'aliceblue' }}}>

        <Button name='dec' onClick={(e)=>handleButtonClick(e)}>
          Decrement -
        </Button>

        <Button name='inc' onClick={(e)=>handleButtonClick(e)}>
          Increment +
        </Button>
      </Box>


    </Container>
  );
};

export default App;
