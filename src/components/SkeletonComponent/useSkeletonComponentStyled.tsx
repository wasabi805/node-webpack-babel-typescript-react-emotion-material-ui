import React from "react";
import { useTheme } from "@mui/material/styles";
import theme from "../../providers/themeProvider";

import { Box } from "@mui/material";

const useSkeletonComponentStyled = () => {
  const theme = useTheme();
  const style = {};

  const LoadingText = () => {
    <Box sx={style}>Loading ...</Box>;
  };

  return {
    LoadingText,
  };
};

export default useSkeletonComponentStyled;
