/** @jsx */
/** @jsxFrag  */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import ActualBox6 from "./ActualBox6";

const Box6 = () => {
  const [toggle, setToggle] = useState(false);
  const [layoutComplete, setLayoutComplete] = useState(false);

  const alignItemsValue = toggle ? "flex-end" : "flex-start";

  return (
    <motion.div
      layout
      style={{ alignItems: alignItemsValue }}
      css={css`
        padding-bottom: 20rem;
        display: flex;
        flex-direction: column;
        gap: 50px;
      `}
    >
      <AnimatePresence>
        {!layoutComplete && (
          <>
            <ActualBox6 setLayout={setLayoutComplete} />
            <ActualBox6 setLayout={setLayoutComplete} delay={0.2} />
            <ActualBox6 setLayout={setLayoutComplete} delay={0.4} />
          </>
        )}
      </AnimatePresence>
      <button
        onClick={() => setToggle((prev) => !prev)}
        css={css`
          max-width: 120px;
          margin: 0 auto;
          padding: 5px 10px;
        `}
      >
        Click
      </button>
    </motion.div>
  );
};

export default Box6;
