import React, { useState } from "react";
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
  animation: ${pulse} infinite 20s linear;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App(props) {
  // let { path, url } = useRouteMatch();
  const [count, setCount] = useState(1);

  const Logos = [];
  for (let i = 0; i < count; i++) {
    Logos.push(<AppLogo></AppLogo>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logos">{Logos}</div>
        <div className="AppDetails">
          <Button onClick={() => setCount(count - 1 <= 0 ? 0 : count - 1)}>
            -
          </Button>
          <p>App 1</p>
          <Button primary onClick={() => setCount(count + 1)}>
            +
          </Button>
        </div>
      </header>
    </div>
  );
}
