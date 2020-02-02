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
  height: 30vmin;
  pointer-events: none;
  animation: ${pulse} infinite 10s linear;
`;

const defaultHistory = createBrowserHistory();
const TestRoute = ({ history }) => <h2>Test route for App 1</h2>;

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
        <p>App 1</p>
      </header>
    </div>
  );
}
