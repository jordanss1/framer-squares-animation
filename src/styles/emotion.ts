import { css, SerializedStyles } from "@emotion/react";

export const defaultBox = (extraStyles?: SerializedStyles) => {
  return css`
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${extraStyles}
  `;
};
