import { AnimationProps } from "framer-motion";
import { useReducer, useCallback } from "react";

export const BOXES_ACTION_TYPES = {
  box1: "box1",
};

const boxesActionArray = [...Object.values(BOXES_ACTION_TYPES)] as const;

type BoxesActionReturnedTypes = (typeof boxesActionArray)[number];

type BoxesStateType = {
  box1: AnimationProps;
};

export const INITIAL_STATE: BoxesStateType = {
  box1: {
    initial: { x: 0, opacity: 0.5 },
    animate: { x: "200px", opacity: 1 },
    transition: { duration: 1.5 },
  },
};

type BoxesReducerActionType = {
  type: BoxesActionReturnedTypes;
  payload: AnimationProps;
};

const useBoxesHook = () => {
  const [state, dispatch] = useReducer(
    (state: BoxesStateType, action: BoxesReducerActionType) => {
      switch (action.type) {
        case BOXES_ACTION_TYPES.box1: {
          if (!action.payload) {
            throw new Error("Payload must not be void");
          }

          const { payload } = action;
          return { ...state, box1: payload };
        }
        default:
          return { ...state };
      }
    },
    INITIAL_STATE
  );

  const animateBox1 = useCallback((payload: AnimationProps) => {
    dispatch({ type: BOXES_ACTION_TYPES.box1, payload });
  }, []);

  const box1 = state.box1;

  return { box1, animateBox1 };
};

export default useBoxesHook;
