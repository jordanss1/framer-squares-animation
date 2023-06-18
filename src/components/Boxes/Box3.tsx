/** @jsx jsx */
import { ReactElement } from "react";
import { css } from "@emotion/react";
import { Variants, motion } from "framer-motion";
import { defaultBox } from "../../styles/emotion";

const Box3 = (): ReactElement => {
  const styles = css`
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const parentVariant: Variants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const childVariant: Variants = {
    hidden: { x: "-10vw", opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div
      css={css`
        padding-bottom: 20rem;
      `}
    >
      <motion.div
        variants={parentVariant}
        animate="visible"
        initial="hidden"
        css={defaultBox(styles)}
      >
        {[1, 2, 3].map((ele) => (
          <motion.span
            key={ele}
            variants={childVariant}
            css={css`
              width: 1px;
              gap: 0.5em;
              background-color: white;
              padding: 20px;
              list-style: none;
              margin: 0;
            `}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
