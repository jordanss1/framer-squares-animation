/** @jsx jsx */
import { ReactElement } from "react";
import { css } from "@emotion/react";
import { Variants, motion, useAnimation } from "framer-motion";
import { defaultBox } from "../../styles/emotion";

const Box5 = (): ReactElement => {
  const control = useAnimation();

  const styles = css`
    background-color: aquamarine;
  `;

  const boxAnimationVariants: Variants = {
    right: {
      x: "calc(100vw - 270px)",
      transition: { duration: 2 },
    },
    left: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
    circle: {
      borderRadius: "50%",
      transition: { duration: 2 },
    },
    square: {
      borderRadius: 0,
      transition: { duration: 2 },
    },
  };

  const buttons = ["Move Right", "Move Left", "Circle", "Square", "Stop"];

  const determineVariant = (button: string) => {
    const { right, left, circle, square } = boxAnimationVariants;

    return button.includes("Right")
      ? right
      : button.includes("Left")
      ? left
      : button.includes("Circle")
      ? circle
      : square;
  };

  return (
    <div
      css={css`
        padding-bottom: 20rem;
      `}
    >
      {buttons.map((button) => (
        <button
          onClick={() => {
            button === "Stop"
              ? control.stop()
              : control.start(determineVariant(button));
          }}
          css={css`
            color: white;
            padding: 1rem;
            margin-right: 1.5rem;
            margin-bottom: 3rem;
            border: none;
            background-color: rgb(48, 155, 197);
            font-size: 1.25rem;
            font-weight: 700;
            width: 15rem;
            cursor: pointer;
          `}
        >
          {button}
        </button>
      ))}
      <motion.div animate={control} css={defaultBox(styles)} />
    </div>
  );
};

export default Box5;
