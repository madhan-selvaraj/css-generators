import { useReducer } from "react";

const initialState = {
  boxColor: "#8646cc",
  shadowColor: "#a8a8a8",
  horizontalLength: 6,
  verticalLength: 6,
  blur: 6,
  spread: 0,
  opacity: 100,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BOX_COLOR":
      return { ...state, boxColor: action.payload };
    case "SET_SHADOW_COLOR":
      return { ...state, shadowColor: action.payload };
    case "SET_HORIZONTAL_LENGTH":
      return { ...state, horizontalLength: action.payload };
    case "SET_VERTICAL_LENGTH":
      return { ...state, verticalLength: action.payload };
    case "SET_BLUR":
      return { ...state, blur: action.payload };
    case "SET_SPREAD_RADIUS":
      return { ...state, spread: action.payload };
    case "SET_OPACITY":
      return { ...state, opacity: action.payload };
    default:
      return state;
  }
};

const useBoxShadowReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setBoxColor = (color) =>
    dispatch({ type: "SET_BOX_COLOR", payload: color });
  const setShadowColor = (color) =>
    dispatch({ type: "SET_SHADOW_COLOR", payload: color });
  const setHorizontalLength = (length) =>
    dispatch({ type: "SET_HORIZONTAL_LENGTH", payload: length });
  const setVerticalLength = (length) =>
    dispatch({ type: "SET_VERTICAL_LENGTH", payload: length });
  const setBlur = (blur) => dispatch({ type: "SET_BLUR", payload: blur });
  const setSpread = (spreadRadius) =>
    dispatch({ type: "SET_SPREAD_RADIUS", payload: spreadRadius });
  const setOpacity = (opacity) =>
    dispatch({ type: "SET_OPACITY", payload: Math.min(opacity, 100) });

  return {
    boxColor: state.boxColor,
    shadowColor: state.shadowColor,
    horizontalLength: state.horizontalLength,
    verticalLength: state.verticalLength,
    blur: state.blur,
    spread: state.spread,
    opacity: state.opacity,
    setBoxColor,
    setShadowColor,
    setHorizontalLength,
    setVerticalLength,
    setBlur,
    setSpread,
    setOpacity,
  };
};

export default useBoxShadowReducer;
