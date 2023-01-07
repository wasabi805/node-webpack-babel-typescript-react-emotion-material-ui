import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { css, keyframes } from '@emotion/react'

const LoadingTextContainer =  styled((props: any)=><Box {...props}/>)(({theme}: any)=>{
    const transistion = keyframes`
    from{
        background-position: 0%;
    }
    to{
        background-position: 100%;
    }
`

    // for animated gradient
    // see : https://www.youtube.com/watch?v=2NxUssDAxoY

    // dont forget to return the style wrapped in css
    return css`
        //  styles needed for animation

        & p {
            font-family: helvetica;
            font-size: 3rem;
        }

        .text{
            text-transform: uppercase;
            background-image: linear-gradient(to right, #38e0f861, #0060ff, cyan);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;

            background-size: 300%;
            background-position: -100%;

            animation: ${transistion} 3s infinite alternate-reverse;
        }

        

    `
})



const LoadingText = ({sx}: any) => {
   
  return (
    <LoadingTextContainer sx={sx}>
        <p className='text'>
        loading ...
        </p>
    </LoadingTextContainer>
  );
};

export default LoadingText;
