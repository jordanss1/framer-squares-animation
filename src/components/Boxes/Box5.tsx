/** @jsx jsx */
import { ReactElement } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultBox } from "../../styles/emotion";

const Box5 = (): ReactElement => {
  const styles = css`
    background-color: aquamarine;
  `;

  return (
    <div
      css={css`
        padding-bottom: 20rem;
      `}
    >
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{ duration: 2 }}
        css={defaultBox(styles)}
      ></motion.div>
    </div>
  );
};

export default Box5;
