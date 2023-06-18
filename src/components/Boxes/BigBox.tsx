/** @jsx jsx */
import { ReactElement } from "react";
import { css } from "@emotion/react";
import { Variants, motion, useCycle } from "framer-motion";
import { defaultBox } from "../../styles/emotion";

const BigBox = (): ReactElement => {
  const [radiantAnimation, cycleRadiant] = useCycle("spinning", "fastSpinning");
  const [outerBoxAnimation, cycleOuterBox] = useCycle("lowGlow", "highGlow");

  const styles = css`
    width: 100%;
    height: 100%;
  `;

  const backgroundVariants: Variants = {
    spinning: {
      background: [
        null,
        "radial-gradient(circle at 150px -250px, rgb(1, 6, 164), transparent 80%)",
        "radial-gradient(circle at 0px -50px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at -150px 330px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 250px 630px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 750px 400px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 450px 0px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 150px -250px, rgb(0, 3, 164), transparent 80%)",
      ],
      transition: {
        repeat: Infinity,
        duration: 2.5,
        ease: "linear",
      },
    },
    fastSpinning: {
      background: [
        null,
        "radial-gradient(circle at 150px -250px, rgb(1, 6, 164), transparent 80%)",
        "radial-gradient(circle at 0px -50px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at -150px 330px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 250px 630px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 750px 400px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 450px 0px, rgb(0, 3, 164), transparent 80%)",
        "radial-gradient(circle at 150px -250px, rgb(0, 3, 164), transparent 80%)",
      ],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  const outerVariants: Variants = {
    lowGlow: {
      boxShadow: [
        "0px 0px 70px rgb(255, 255, 255, 0)",
        "0px 0px 0px rgb(255, 255, 255, 0.7)",
      ],
      transition: {
        repeat: Infinity,
        duration: 1.25,
        ease: "backInOut",
      },
    },

    highGlow: {
      boxShadow: [
        "0px 0px 130px rgb(255, 255, 255, 0)",
        "0px 0px 0px rgb(255, 255, 255, 1)",
      ],
      transition: {
        repeat: Infinity,
        duration: 0.25,
        ease: "linear",
      },
    },
  };

  return (
    <div
      css={css`
        padding-bottom: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: black;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          border-radius: 50%;
          align-content: center;
          padding: 10px;
        `}
      >
        <motion.div
          variants={outerVariants}
          animate={outerBoxAnimation}
          css={css`
            background-color: #090909;
            border-radius: 50%;
            width: 400px;
            height: 400px;
            overflow: hidden;
          `}
        >
          <motion.div
            variants={backgroundVariants}
            animate={radiantAnimation}
            css={defaultBox(styles)}
          />
        </motion.div>
      </div>
      <motion.button
        onMouseEnter={() => {
          cycleRadiant(1);
          cycleOuterBox(1);
        }}
        onMouseLeave={() => {
          cycleRadiant();
          cycleOuterBox();
        }}
        css={css`
          max-width: 100px;
          padding: 10px;
        `}
      >
        Hover
      </motion.button>
    </div>
  );
};

export default BigBox;
