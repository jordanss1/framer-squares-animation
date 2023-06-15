/** @jsx jsx */
import { useRef, ReactElement } from "react";
import { css } from "@emotion/react";
import { AnimationProps, motion } from "framer-motion";
import { defaultBox } from "../styles/emotion";

const Box2 = (): ReactElement => {
  const constraint = useRef(null);

  const styles = css`
    background-color: aquamarine;
  `;

  return (
    <div
      ref={constraint}
      css={css`
        padding-bottom: 20rem;
      `}
    >
      <motion.div
        drag="x"
        dragConstraints={constraint}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        css={defaultBox(styles)}
      />
    </div>
  );
};

export default Box2;
