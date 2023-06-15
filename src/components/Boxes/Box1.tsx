/** @jsx jsx */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import useBoxesHook from "../../hooks/useBoxesHook";

const Box1 = () => {
  const { box1, animateBox1 } = useBoxesHook();

  useEffect(() => {}, []);

  return (
    <div
      css={css`
        padding-bottom: 20rem;
      `}
    >
      <motion.div
        css={css`
          width: 15rem;
          height: 15rem;
          background-color: aquamarine;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
        initial={box1.initial}
        animate={box1.animate}
        transition={box1.transition}
      />
    </div>
  );
};

export default Box1;
