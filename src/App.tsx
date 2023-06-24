import React from "react";
import "./App.css";
import { styled } from "styled-components";
import tw from "twin.macro";
import { Homepage } from "./app/containers/Homepage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  );
}

export default App;
