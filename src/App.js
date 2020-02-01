import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const AppLogo = styled.img.attrs({
  src: logo
})`
  height: 30vmin;
  pointer-events: none;
  animation: ${pulse} infinite 10s linear;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLogo></AppLogo>
        <p>APP 1</p>
      </header>
    </div>
  );
}

export default App;
