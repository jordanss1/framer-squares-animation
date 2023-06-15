/** @jsx jsx */
import { useState, ReactElement } from "react";
import { css } from "@emotion/react";
import { AnimationProps, motion } from "framer-motion";

const Box1 = (): ReactElement => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const box1: AnimationProps = {
    initial: { opacity: 0.2, backgroundColor: "aquamarine" },
    animate: {
      x: isAnimating ? "calc(100vw - 120%)" : 0,
      opacity: isAnimating ? 1 : 0.5,
      rotate: isAnimating ? 360 : 0,
    },
    transition: { type: "spring", stiffness: 60 },
  };

  const { initial, animate, transition } = box1;

  return (
    <div
      css={css`
        padding-bottom: 20rem;
      `}
    >
      <motion.div
        onClick={() => setIsAnimating((prev) => !prev)}
        css={css`
          width: 15rem;
          height: 15rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
        initial={initial}
        animate={animate}
        transition={transition}
      />
    </div>
  );
};

export default Box1;
