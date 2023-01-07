import React, { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Button } from "@mui/material";
import { increment, decrement } from "../reducers/usersSlice";
import SkeletonComponent from "./SkeletonComponent";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const userSliceState = useSelector((state) => state);
  console.log("what is userSliceState", userSliceState);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    dispatch(name === "dec" ? decrement() : increment());
  };

  const extractedKeys = ["inquiries", "bulkPrint", "inputField"];

  const fakeReducer = {
    inquiries: {
      bulkPrint: {
        inputField: "go",
      },
    },
  };

  const stopAtKey = "inputField";
  const newInputs = "a full sting";

  interface Iobj {}

  interface IProps {
    fakeReducer: any;
    stopAtKey: string;
  }

  type Target = keyof Iobj | string;

  const changeInputField = ({ fakeReducer, stopAtKey }: IProps) => {
    const dig = (currentObject: Iobj, target: Target): any => {
      return target in currentObject
        ? (currentObject as any)[target]
        : Object.values(currentObject).reduce((acc, val: any) => {
            console.log("what is acc, what is val", { acc, val });

            return acc;
          }, fakeReducer);
    };

    return dig(fakeReducer, stopAtKey);
  };

  /**---------------------------------------------- */

  console.log("what is fakeReducer", fakeReducer);
  const z = changeInputField({ fakeReducer, stopAtKey });

  console.log("what is final", z);

  return (
    <Container
      sx={
        {
          // bgcolor: "red"
        }
      }
    >
      <h1>heyTim</h1>
      <p>Hello</p>

      <Box
        sx={{
          display: "flex",
          "& button": { margin: "0 .5rem", background: "aliceblue" },
        }}
      >
        <Button name="dec" onClick={(e) => handleButtonClick(e)}>
          Decrement -
        </Button>

        <Button name="inc" onClick={(e) => handleButtonClick(e)}>
          Increment +
        </Button>
      </Box>

      <SkeletonComponent />
    </Container>
  );
};

export default App;
