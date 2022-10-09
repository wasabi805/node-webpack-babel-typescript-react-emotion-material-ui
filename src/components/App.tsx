import React from "react";
import {Container, Button} from '@mui/material';

const App = () => {


  return (
    <Container sx={{
      // bgcolor: "red"
      }}>
      <h1>heyTim</h1>
      <p>Hello</p>
      <Button style={{background: 'aliceblue'}}>
        Click Me
      </Button>
    </Container>
  );
};

export default App;
