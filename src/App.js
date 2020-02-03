import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img.attrs({
  src: logo
})`
  height: 25vmin;
  pointer-events: none;
  animation: ${pulse} infinite ${props => props.speed}s linear;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "#61dafb" : "white")};
  color: ${props => (props.primary ? "white" : "#61dafb")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #61dafb;
  border-radius: 3px;
  cursor: pointer;
`;

const ReverseButton = styled(Button)`
  position: absolute;
  left: 2em;
  top: 2em;
`;

export default function App(props) {
  const [speed, setSpeed] = useState(20);
  const [count, setCount] = useState(1);
  const Logos = [];
  for (let i = 0; i < count; i++) {
    Logos.push(<AppLogo speed={speed}></AppLogo>);
  }

  const eventAddLogo = new CustomEvent("APP1:addLogo", {
    bubbles: true,
    detail: { value: count }
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1 <= 0 ? 0 : count - 1);
  };

  useEffect(() => {
    document.dispatchEvent(eventAddLogo);
    document.addEventListener("APP2:increaseSpeed", e => {
      setSpeed(e.detail.value);
    });
  });

  return (
    <div className="App" id="app1-wrapper">
      <header className="App-header">
        <div className="Logos">{Logos}</div>
        <div className="AppDetails">
          <Button onClick={handleDecrement}>-</Button>
          <p>App 1</p>
          <Button primary onClick={handleIncrement}>
            +
          </Button>
        </div>
      </header>
    </div>
  );
}
