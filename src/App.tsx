/** @jsx jsx */
import { css } from "@emotion/react";
import Box1 from "./components/Boxes/Box1";
import Box2 from "./components/Boxes/Box2";
import "./styles/App.css";
import Box3 from "./components/Boxes/Box3";
import Box4 from "./components/Boxes/Box4";
import Box5 from "./components/Boxes/Box5";

function App() {
  return (
    <div
      css={css`
        padding: 20px;
      `}
    >
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </div>
  );
}

export default App;
