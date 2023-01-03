import styled from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

const Container = styled.div`
background-color: ${(props) => props.theme.bgColor}

`;
const H1 = styled.h1`
color : ${props=> props.theme.textColor}
`

function App() {
  return (
    <div>
      <Container><H1>슬픈서울살이</H1></Container>
    </div>
  );
}

export default App;

// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;
