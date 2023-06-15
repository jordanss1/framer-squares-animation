/** @jsx jsx */
import { useState } from "react";
import { css } from "@emotion/react";
import Box1 from "./components/Boxes/Box1";
import "./styles/App.css";
import Box2 from "./components/Box2";

function App() {
  return (
    <div
      css={css`
        padding: 20px;
      `}
    >
      <Box1 />
      <Box2 />
    </div>
  );
}

export default App;
