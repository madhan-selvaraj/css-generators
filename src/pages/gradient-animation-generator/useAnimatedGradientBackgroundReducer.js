import { useReducer } from "react";

const initialState = {
  speed: 15,
  gradientAngle: 270,
  colors: ["#e39600", "#ea4c89", "#8f48eb"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SPEED":
      return { ...state, speed: action.payload };
    case "UPDATE_GRADIENT_ANGLE":
      return { ...state, gradientAngle: action.payload };
    case "ADD_COLOR":
      return {
        ...state,
        colors: [...state.colors, "#000000"],
      };
    case "UPDATE_COLOR":
      // eslint-disable-next-line no-case-declarations
      const newColors = [...state.colors];
      newColors.splice(action.payload.index, 1, action.payload.color);
      return {
        ...state,
        colors: newColors,
      };
    case "MOVE_COLOR":
      return {
        ...state,
        colors: [...state.colors].splice(
          action.payload.index,
          0,
          action.payload.color
        ),
      };
    case "REMOVE_COLOR":
      return {
        ...state,
        colors: [...state.colors].splice(action.payload.index, 1),
      };
    default:
      return state;
  }
};

const useAnimatedGradientBackgroundReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateSpeed = (speed) =>
    dispatch({ type: "UPDATE_SPEED", payload: speed });
  const updateGradientAngle = (angle) =>
    dispatch({ type: "UPDATE_GRADIENT_ANGLE", payload: angle });
  const addColor = () => dispatch({ type: "ADD_COLOR" });
  const updateColor = (color, index) =>
    dispatch({ type: "UPDATE_COLOR", payload: { color, index } });
  const moveColor = (color, index) =>
    dispatch({ type: "ADD_COLOR", payload: { color, index } });
  const removeColor = (index) =>
    dispatch({ type: "REMOVE_COLOR", payload: index });

  return {
    speed: state.speed,
    gradientAngle: state.gradientAngle,
    colors: state.colors,
    updateSpeed,
    updateGradientAngle,
    addColor,
    updateColor,
    moveColor,
    removeColor,
  };
};

export default useAnimatedGradientBackgroundReducer;
