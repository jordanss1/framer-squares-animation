/** @jsx jsx */
/** @jsxFrag jsx */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { motion, useAnimate, usePresence } from "framer-motion";
import { defaultBox } from "../../../styles/emotion";

const ActualBox6 = ({
  delay,
  setLayout,
}: {
  delay?: number;
  setLayout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      return;
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { x: [0, 200], boxShadow: "1px 0 8px 5px rgb(0, 0, 0)" },
          { boxShadow: { duration: 1 }, x: { duration: 2, delay: 1 } }
        );
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.div
      onLayoutAnimationComplete={() => setLayout(true)}
      ref={scope}
      layout
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: delay,
      }}
      css={defaultBox(css`
        background-color: aquamarine;
        width: 150px;
        height: 150px;
        box-shadow: 0 0 0 0px rgb(0, 0, 0);
      `)}
    />
  );
};

export default ActualBox6;
