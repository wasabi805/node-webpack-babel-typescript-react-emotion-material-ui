import styled from "@emotion/styled";

// example 1 : Basic Useage
export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Adistro";
  color: white;
  background: magenta;
  height: 200px;
  width: 200px;
  border-radius: 5px;
`;

//example 2 : Another Basic Useage
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: yellow;
  background: LightSlateGrey;
  height: 500px;
  width: 500px;
  border-radius: 5px;
`;

//  example 3 : Extnding Styles
// https://styled-components.com/docs/basics#extending-styles

export const ExtendedWrapper = styled(Wrapper)`
  background: cyan;
  color: blue;
`;

//  example 4  : Passed Props
// see: https://styled-components.com/docs/basics#passed-props

interface iButton {
  styling?: {
    someBgColor?: string;
  };
}

export const Button = styled.button`
    background: ${(props: iButton) => props?.styling?.someBgColor} ;
    height: 3rem;
    width: 4rm;
    padding: 0 1rem;
    border;
    cursor: pointer;
`;
