/** @jsx jsx */
import { useState } from "react";
import { css } from "@emotion/react";
import Box1 from "./components/Boxes/Box1";
import "./App.css";

function App() {
  return (
    <div
      css={css`
        padding: 5rem;
      `}
    >
      <Box1 />
    </div>
  );
}

export default App;
