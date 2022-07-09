import React from "react";
import {
  Container,
  Wrapper,
  ExtendedWrapper,
  Button,
} from "./styledComponents";

const App = () => {
  return (
    <div>
      React with Typescript, Webpack, and Babel
      <Container>
        THIS IS A Container
        <Wrapper>THIS IS A WRAPPER</Wrapper>
        <Button
          styling={{
            someBgColor: "lime",
          }}
        >
          Some Button
        </Button>
        <ExtendedWrapper>THIS IS AN EXTENDED WRAPPER</ExtendedWrapper>
      </Container>
    </div>
  );
};

export default App;
